import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './reset.css';
import s from './styles.module.scss';

import Context from './Hook/Context';

import Layout from './components/Layout/Layout';
import Homepage from './pages/Homepage/Homepage';
import Train from './pages/Train/Train';
import Start from './pages/Train/Start/Start';
import Mechine from './pages/Train/Mechine/Mechine';
import Error from './pages/Train/Error/Error';
import Dictionary from './pages/Dictionary/Dictionary';

import { PrefixesPrePri } from './../data';

import s2 from './pages/Train/Mechine/Mechine.module.scss';

function App() {
    const [allData, setAllData] = useState(PrefixesPrePri);
    const [selectedData, setSelectedData] = useState([]);
    const [uncorrectAnswer, setUncorrectAnswer] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isUncorrect, setIsUncorrect] = useState(false);
    useEffect(() => {
        setSelectedData([]);
        setUncorrectAnswer([]);
    }, []);
    return (
        <Context.Provider
            value={{
                allData,
                selectedData,
                setSelectedData,
                uncorrectAnswer,
                setUncorrectAnswer,
                isCorrect,
                setIsCorrect,
                isUncorrect,
                setIsUncorrect,
            }}
        >
            <div
                className={
                    s.wrapper +
                    ' ' +
                    (isCorrect ? s2.isCorrect : isUncorrect ? s2.uncorrect : '')
                }
            >
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Homepage />} />
                        <Route path='train/*' element={<Train />}>
                            <Route
                                index
                                element={<Start allData={allData} />}
                            />
                            <Route path='mechine' element={<Mechine />} />
                            <Route path='error' element={<Error />} />
                        </Route>
                        <Route path='dictionary' element={<Dictionary />} />
                    </Route>
                </Routes>
            </div>
        </Context.Provider>
    );
}

export default App;
