import React from 'react';
import { NavLink } from 'react-router-dom';
import Favoritelink from '../FavoriteLink/FavoriteLink';

import styles from './Header.module.css'


const Header = () => {
    return (
        <header className={styles.header}>
            <ul>
                <li><NavLink to="/" end>Главная</NavLink></li>
                <li><NavLink to="/people/?page=1">Люди</NavLink></li>
                <li><NavLink to="/search" end>Поиск</NavLink></li>
                <li><NavLink to="/not-found" end>Не найдено</NavLink></li>
                <li><NavLink to="/error" end>Error</NavLink></li>

            </ul>

            <Favoritelink />
        </header>
    );
}

export default Header;
