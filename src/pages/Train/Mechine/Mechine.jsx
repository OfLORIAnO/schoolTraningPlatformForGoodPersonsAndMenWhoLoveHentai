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
    //! левая всегда з,д,о,ъ,е,ы
    // ! правая всегда с,т,а,ь,и,и
    const letterInner = (letter) => {
        setLetter1('');
        setLetter2('');
        if (letter === 'и') {
            setLetter1('е+ы');
            setLetter2('и');
        } else if (letter === 'е') {
            setLetter1('е');
            setLetter2('и');
        } else if (letter === 'з') {
            setLetter1('з');
            setLetter2('с');
        } else if (letter === 'д') {
            setLetter1('д');
            setLetter2('т');
        } else if (letter === 'т') {
            setLetter1('д');
            setLetter2('т');
        } else if (letter === 'о') {
            setLetter1('о');
            setLetter2('а');
        } else if (letter === 'а') {
            setLetter1('о');
            setLetter2('а');
        } else if (letter === 'ъ') {
            setLetter1('ъ');
            setLetter2('ь');
        } else if (letter === 'ь') {
            setLetter1('ъ');
            setLetter2('ь');
        } else if (letter === 'с') {
            setLetter1('з');
            setLetter2('с');
        } else if (letter === 'з') {
            setLetter1('з');
            setLetter2('с');
        } else if (letter === 'ы') {
            setLetter1('ы');
            setLetter2('и');
        } else if (letter === 'и') {
            setLetter1('ы');
            setLetter2('и');
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
    useEffect(() => {
        console.log(correctLetter);
        letterInner(correctLetter);
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
                            <span>{letter1}</span>
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
                            <span>{letter2}</span>
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
