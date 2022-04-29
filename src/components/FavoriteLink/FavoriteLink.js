import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


import styles from './FavoriteLink.module.css'

const Favoritelink = () => {
    const [count, setcount] = useState(0);

    const storeDate = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const length = Object.keys(storeDate).length;
        setcount(length)
    }, [storeDate]);


    return (
        <div>
            <NavLink to="/favorite" end>
                <img src="../assetc/img/favorite-link.svg" alt="" />
                <span>{count}</span>
            </NavLink>
        </div>
    );
}

export default Favoritelink;
