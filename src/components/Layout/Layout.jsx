import React from 'react';
import { Outlet } from 'react-router-dom';

import s from './Layout.module.scss';

import Header from '../Header/Header';

export default function Layout() {
    return (
        <div className={s.layout}>
            <Header />
            <div div className={s.page}>
                <Outlet />
            </div>
            <footer>
                <div className={s.container}>Главная</div>
            </footer>
        </div>
    );
}
