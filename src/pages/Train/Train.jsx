import React from 'react';
import { Outlet } from 'react-router';

import s from './Train.module.scss';

export default function Train() {
    return (
        <div className={s.train}>
            <div className={s.container}>
                <Outlet />
            </div>
        </div>
    );
}
