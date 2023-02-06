import React, { useState, useContext, useEffect } from 'react';
import s from './Mechine.module.scss';

import { redirect, useNavigate } from 'react-router-dom';

import arrow from '/arrow.svg';
import gal from '/gal.svg';
import red from '/red.svg';

import Context from '../../../Hook/Context';

import { shuffleArray } from './../../../../func.js';

export default function Mechine() {
    const {
        selectedData,
        setSelectedData,
        uncorrectAnswer,
        setUncorrectAnswer,
        isCorrect,
        setIsCorrect,
        isUncorrect,
        setIsUncorrect,
        allData,
    } = useContext(Context);
    const [correctLetter, setCorrectLetter] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [words, setWords] = useState('');

    useEffect(() => {
        setIsUncorrect(true);
        setTimeout(() => setIsUncorrect(false), 500);
    }, [correctAnswer]);
    useEffect(() => {
        setIsCorrect(true);
        setTimeout(() => setIsCorrect(false), 500);
    }, [uncorrectAnswer]);

    useEffect(() => {
        setSelectedData(shuffleArray(selectedData));
    }, []);
    const [letter1, setLetter1] = useState('');
    const [letter2, setLetter2] = useState('');
    const handleSwitch = (position) => {
        if (position === 'left') {
            if (correctLetter === letter1) {
                setCorrectAnswer((prev) => [...prev, words]);
            } else {
                setUncorrectAnswer((prev) => [...prev, words]);
            }
            console.log('left');
        } else {
            if (correctLetter === letter1) {
                setUncorrectAnswer((prev) => [...prev, words]);
            } else {
                setCorrectAnswer((prev) => [...prev, words]);
            }
            console.log('right');
        }
        setSelectedData(selectedData.filter((prev) => prev != words));
    };
    useEffect(() => {
        console.log(uncorrectAnswer);
    }, [uncorrectAnswer]);

    const letterInner = (letter) => {
        setLetter1('');
        setLetter2('');
        if (letter === 'И') {
            setLetter1('Е');
            setLetter2('И');
        } else if (letter === 'Е') {
            setLetter1('Е');
            setLetter2('И');
        } else if (letter === 'Д') {
            setLetter1('Д');
            setLetter2('Т');
        } else if (letter === 'Т') {
            setLetter1('Д');
            setLetter2('Т');
        } else if (letter === 'О') {
            setLetter1('О');
            setLetter2('А');
        } else if (letter === 'А') {
            setLetter1('О');
            setLetter2('А');
        } else if (letter === 'Ъ') {
            setLetter1('Ъ');
            setLetter2('Ь');
        } else if (letter === 'Ь') {
            setLetter1('Ъ');
            setLetter2('Ь');
        } else if (letter === 'З') {
            setLetter1('З');
            setLetter2('С');
        } else if (letter === 'С') {
            setLetter1('З');
            setLetter2('С');
        } else if (letter === 'Ы') {
            setLetter1('Ы');
            setLetter2('И');
        } else if (letter === 'И') {
            setLetter1('Ы');
            setLetter2('И');
        }
    };
    useEffect(() => {
        let i = 0;
        if (words) {
            while (i < words[0].length) {
                if (words[0][i] === '.') {
                    setCorrectLetter(words[1][i]);
                    break;
                }
                i++;
            }
        }
    }, [words]);
    const changeLetters = (left, right) => {
        setLetter1(left);
        setLetter2(right);
    };

    //! левая всегда з,д,о,ъ,е,ы
    // ! правая всегда с,т,а,ь,и,и
    useEffect(() => {
        console.log(correctLetter);
        allData.prepri.find((wordsPar) => wordsPar == words)
            ? changeLetters('И', 'Е')
            : allData.zs.find((wordsPar) => wordsPar == words)
            ? changeLetters('З', 'С')
            : allData.bs.find((wordsPar) => wordsPar == words)
            ? changeLetters('И', 'Ы')
            : allData.mm.find((wordsPar) => wordsPar == words)
            ? changeLetters('Ь', 'Ъ')
            : allData.all.find((wordsPar) => wordsPar == words)
            ? letterInner(correctLetter)
            : null;
    }, [correctLetter]);
    useEffect(() => {
        setWords(selectedData[0]);
    }, [selectedData]);
    const navigate = useNavigate();
    if (!selectedData.length) {
        return (
            <div className={s.end}>
                <button
                    className={s.end__button}
                    onClick={() => {
                        navigate('/train/error');
                    }}
                >
                    завершить
                </button>
            </div>
        );
    } else {
        return (
            <div className={s.mechine}>
                <div className={s.mechine__body}>
                    <div className={s.buttons}>
                        <button
                            className={
                                isCorrect
                                    ? s.isCorrect
                                    : isUncorrect
                                    ? s.uncorrect
                                    : ''
                            }
                            onClick={() => handleSwitch('left')}
                        >
                            <img src={arrow} alt='' />
                            <span>{letter1 ? letter1 : null}</span>
                        </button>
                        <button
                            className={
                                isCorrect
                                    ? s.isCorrect
                                    : isUncorrect
                                    ? s.uncorrect
                                    : ''
                            }
                            onClick={() => handleSwitch('right')}
                        >
                            <span>{letter2 ? letter2 : null}</span>
                            <img src={arrow} alt='' />
                        </button>
                    </div>
                    <div className={s.text}>
                        <div className={s.word}>
                            <h1>{words ? words[0] : null}</h1>
                        </div>
                        <div className={s.score}>
                            <p>
                                <img src={gal} alt='' />
                                {correctAnswer.length}
                            </p>
                            <p>
                                {uncorrectAnswer.length}
                                <img src={red} alt='' />{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
