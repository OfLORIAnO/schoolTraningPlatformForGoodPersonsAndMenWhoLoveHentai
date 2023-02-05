import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './reset.css';
import s from './styles.module.scss';

import Context from './hook/Context';

import Layout from './components/Layout/Layout';
import Homepage from './pages/Homepage/Homepage';
import Train from './pages/Train/Train';
import Start from './pages/Train/Start/Start';
import Mechine from './pages/Train/Mechine/Mechine';

import { PrefixesPrePri } from './../data';

function App() {
    const [allData, setAllData] = useState(PrefixesPrePri);
    const [selectedData, setSelectedData] = useState([]);
    useEffect(() => {
        setSelectedData([]);
    }, []);
    return (
        <Context.Provider
            value={{
                allData,
                selectedData,
                setSelectedData,
            }}
        >
            <div className={s.wrapper}>
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
                    </Route>
                </Routes>
            </div>
        </Context.Provider>
    );
}

export default App;
