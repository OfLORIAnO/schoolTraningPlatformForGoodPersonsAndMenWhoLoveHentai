import React, { useState, useContext, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import s from './Start.module.scss';

import Context from '../../../Hook/Context';

import red from '/red.svg';
import gal from '/gal.svg';

export default function Start() {
    const { allData, selectedData, setSelectedData } = useContext(Context);

    const [errorText, setErrorText] = useState(' ');
    const [amountInput, setAmountInput] = useState(0);
    const [amountOfWords, setAmountOfWords] = useState(
        allData.prepri.length +
            allData.zs.length +
            allData.bs.length +
            allData.mm.length +
            allData.all.length
    );
    const [zsActive, setzsActive] = useState(false);
    const [preActive, setpreActive] = useState(false);
    const [bsActive, setbsActive] = useState(false);
    const [mmActive, setmmActive] = useState(false);
    const [allActive, setallActive] = useState(false);
    const [somethingActive, setSomethingActive] = useState(false);
    useEffect(() => {
        setAmountOfWords(0);
        preActive
            ? setAmountOfWords((num) => num + allData.prepri.length)
            : null;
        zsActive ? setAmountOfWords((num) => num + allData.zs.length) : null;
        bsActive ? setAmountOfWords((num) => num + allData.bs.length) : null;
        mmActive ? setAmountOfWords((num) => num + allData.mm.length) : null;
        allActive ? setAmountOfWords((num) => num + allData.all.length) : null;
        amountInput > 0
            ? amountInput > amountOfWords
                ? setErrorText('Введите данные корректно?')
                : setErrorText('')
            : setErrorText('Введите данные корректно');
        amountOfWords ? setSomethingActive(true) : false;
    }, [
        zsActive,
        preActive,
        bsActive,
        mmActive,
        allActive,
        amountInput,
        amountOfWords,
    ]);

    useEffect(() => {
        setSelectedData([]);
        preActive
            ? selectedData.find((prev) => prev.prepri)
                ? console.log('нашёл', prev.prepri)
                : setSelectedData((prev) => [...prev, allData.prepri])
            : setSelectedData((data) =>
                  data.filter((prev) => prev !== allData.prepri)
              );
        zsActive
            ? selectedData.find((prev) => prev.zs)
                ? console.log('нашёл', prev.zs)
                : setSelectedData((prev) => [...prev, allData.zs])
            : setSelectedData((data) =>
                  data.filter((prev) => prev !== allData.zs)
              );
        bsActive
            ? selectedData.find((prev) => prev.bs)
                ? console.log('нашёл', prev.bs)
                : setSelectedData((prev) => [...prev, allData.bs])
            : setSelectedData((data) =>
                  data.filter((prev) => prev !== allData.bs)
              );
        mmActive
            ? selectedData.find((prev) => prev.mm)
                ? console.log('нашёл', prev.mm)
                : setSelectedData((prev) => [...prev, allData.mm])
            : setSelectedData((data) =>
                  data.filter((prev) => prev !== allData.mm)
              );
        allActive
            ? selectedData.find((prev) => prev.all)
                ? console.log('нашёл', prev.all)
                : setSelectedData((prev) => [...prev, allData.all])
            : setSelectedData((data) =>
                  data.filter((prev) => prev !== allData.all)
              );
    }, [zsActive, preActive, bsActive, mmActive, allActive]);
    useEffect(() => {
        console.log(selectedData);
    }, [selectedData]);
    return (
        <div className={s.start}>
            <div className={s.start__body}>
                <h1>Тренажёр</h1>
                <div className={s.choose}>
                    <span>Выберите приставки</span>
                    <div className={s.choose__prefixes}>
                        <div className={s.choose__body}>
                            <ul>
                                <li onClick={() => setzsActive(!zsActive)}>
                                    <img src={zsActive ? gal : red} alt='' />
                                    <span>з\с</span>
                                </li>
                                <li onClick={() => setpreActive(!preActive)}>
                                    <img src={preActive ? gal : red} alt='' />
                                    <span>пре\при</span>
                                </li>
                                <li onClick={() => setbsActive(!bsActive)}>
                                    <img src={bsActive ? gal : red} alt='' />
                                    <span>ы\и</span>
                                </li>
                                <li onClick={() => setmmActive(!mmActive)}>
                                    <img src={mmActive ? gal : red} alt='' />
                                    <span>ъ\ь</span>
                                </li>
                                <li onClick={() => setallActive(!allActive)}>
                                    <img src={allActive ? gal : red} alt='' />
                                    <span>Все остальные приставки</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={s.first}>
                    <div className={s.amount}>
                        <span>Выберите количество слов из словаря</span>
                        <div className={s.input}>
                            <input
                                type='text'
                                onChange={(e) => setAmountInput(e.target.value)}
                            />
                            /{amountOfWords}
                        </div>
                    </div>
                    {errorText ? (
                        <span class={s.error}>{errorText}</span>
                    ) : null}
                </div>

                <Link
                    to={!errorText ? (amountOfWords ? 'mechine' : '') : ''}
                    className={
                        !errorText
                            ? somethingActive
                                ? s.ready
                                : s.ready__none
                            : s.ready__none
                    }
                >
                    НАЧАТЬ
                </Link>
            </div>
        </div>
    );
}
