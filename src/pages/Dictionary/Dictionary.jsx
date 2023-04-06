import React, { useContext, useEffect, useState } from 'react';
import s from './Dictionary.module.scss';

import { PrefixesPrePri } from '../../../data';

import Context from '../../Hook/Context';
export default function Dictionary() {
    const [allData, setAllData] = useState(PrefixesPrePri);
    // useEffect(() => {
    //     console.log(allData);
    // }, []);
    return (
        <div className={s.container}>
            <div className={s.dictionary}>
                <h1>Словарь</h1>
                <div className={s.dictionary__item}>
                    <h1>Пре\При</h1>
                    {allData.prepri
                        ? allData.prepri.map((item, i) => (
                              <p key={i}>{item[1]}</p>
                          ))
                        : null}
                </div>
                <div className={s.dictionary__item}>
                    <h1>З\С</h1>
                    {allData.zs
                        ? allData.zs.map((item, i) => <p key={i}>{item[1]}</p>)
                        : null}
                </div>
                <div className={s.dictionary__item}>
                    <h1>Ы\И</h1>
                    {allData.bs
                        ? allData.bs.map((item, i) => <p key={i}>{item[1]}</p>)
                        : null}
                </div>
                <div className={s.dictionary__item}>
                    <h1>Ъ\Ь</h1>
                    {allData.mm
                        ? allData.mm.map((item, i) => <p key={i}>{item[1]}</p>)
                        : null}
                </div>
                <div className={s.dictionary__item}>
                    <h1>Все остальные приставки</h1>
                    {allData.all
                        ? allData.all.map((item, i) => <p key={i}>{item[1]}</p>)
                        : null}
                </div>
            </div>
        </div>
    );
}
