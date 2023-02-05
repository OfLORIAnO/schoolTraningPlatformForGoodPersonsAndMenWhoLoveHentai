import React, { useContext, useEffect } from 'react';

import s from './Errors.module.scss';

import red from '/red.svg';
import gal from '/gal.svg';

import Context from '../../../Hook/Context';

export default function Error() {
    const { uncorrectAnswer } = useContext(Context);
    useEffect(() => {
        console.log(uncorrectAnswer);
    }, []);
    if (!uncorrectAnswer.length) {
        return (
            <div className={s.cong}>
                <div className={s.cong__body}>
                    <h1>Поздравляем, ошибок нет</h1>
                    <img src={gal} alt='' />
                </div>
            </div>
        );
    } else {
        return (
            <div className={s.error}>
                <h1>Ошибки</h1>
                <div className={s.error__list}>
                    <ul>
                        {uncorrectAnswer
                            ? uncorrectAnswer.map((item) => (
                                  <li>
                                      <img src={red} alt='' />
                                      <span>{item[1]}</span>
                                  </li>
                              ))
                            : null}
                    </ul>
                </div>
            </div>
        );
    }
}
