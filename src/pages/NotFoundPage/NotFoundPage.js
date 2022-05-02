import React from 'react';
import { useLocation } from 'react-router-dom';
import Errormesage from '../../components/ErrorMesage/ErrorMesage';


const Notfoundpage = () => {
    let location = useLocation();

    return (
        <div>
            <h1>Извините страница {location.pathname} не найдена :( </h1>
            <Errormesage />
        </div>
    );
}

export default Notfoundpage;
