import React, { useState, useContext, useEffect } from 'react';
import s from './Mechine.module.scss';

import arrow from '/arrow.svg';

import Context from '../../../Hook/Context';

import { shuffleArray } from './../../../../func.js';

export default function Mechine() {
    const { selectedData, setSelectedData } = useContext(Context);
    return <div className={s.mechine}></div>;
}
