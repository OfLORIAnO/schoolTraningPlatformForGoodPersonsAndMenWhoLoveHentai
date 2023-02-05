import React, { useContext, useEffect, useState } from 'react';
import s from './Dictionary.module.scss';

import { PrefixesPrePri } from '../../../data';

import Context from '../../Hook/Context';
export default function Dictionary() {
    const [allData, setAllData] = useState(PrefixesPrePri);
    useEffect(() => {
        console.log(allData);
    }, []);
    return (
        <div className={s.container}>
            <div className={s.dictionary}>
                <h1>Словарь</h1>
                <div className={s.dictionary__item}>
                    <h1>Пре\При</h1>
                    {allData.prepri.map((item) => (
                        <p>{item[1]}</p>
                    ))}
                </div>
                <div className={s.dictionary__item}>
                    <h1>З\С</h1>
                    {allData.zs.map((item) => (
                        <p>{item[1]}</p>
                    ))}
                </div>
                <div className={s.dictionary__item}>
                    <h1>Ы\И</h1>
                    {allData.bs.map((item) => (
                        <p>{item[1]}</p>
                    ))}
                </div>
                <div className={s.dictionary__item}>
                    <h1>Ъ\Ь</h1>
                    {allData.mm.map((item) => (
                        <p>{item[1]}</p>
                    ))}
                </div>
                <div className={s.dictionary__item}>
                    <h1>Все остальные приставки</h1>
                    {allData.all.map((item) => (
                        <p>{item[1]}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
