import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Favoritelink from '../FavoriteLink/FavoriteLink';
import { useTheme, THEME_LIGTH, THEME_DARK, THEME_NEITRAL } from '../../context/ThemeProvider';

import styles from './Header.module.css'

import imgDroid from './img/droid.svg'
import imgLightsaber from './img/lightsaber.svg'
import imgSpaceStation from './img/space-station.svg'



const Header = () => {
    const [icon, seticon] = useState(imgSpaceStation);
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGTH:
                seticon(imgLightsaber)
                break;
            case THEME_DARK:
                seticon(imgDroid)
                break;
            case THEME_NEITRAL:
                seticon(imgSpaceStation)
                break;
            default:
                seticon(imgSpaceStation)
                break;
        }

    }, [isTheme]);




    return (
        <header className={styles.header}>
            <img className={styles.header__logo} src={icon} alt="icon" />
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
