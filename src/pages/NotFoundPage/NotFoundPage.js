import React from 'react';
import { useLocation } from 'react-router-dom';


const Notfoundpage = () => {
    let location = useLocation();

    return (
        <div>
            <h1>Извините страница {location.pathname} не найдена :( </h1>
        </div>
    );
}

export default Notfoundpage;
