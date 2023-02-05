import React from 'react';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.header__body}>
                    <ul>
                        <li>
                            <Link to='/'>Главная</Link>
                        </li>
                        <li>
                            <Link to='/train'>Тренажёр</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
