import React from 'react';

import { useTheme, THEME_LIGTH, THEME_DARK, THEME_NEITRAL } from '../../context/ThemeProvider';

import imgdDarkSide from './img/dark-side.jpg'
import imgFalcon from './img/falcon.jpg'
import imgLightSide from './img/light-side.jpg'

import style from './ChoseSide.module.css'

const Choseside = () => {
    const isTheme = useTheme()

    return (
        <div className={style.buttons}>
            {isTheme.theme}
            <button onClick={() => isTheme.change(THEME_LIGTH)}>
                <img src={imgdDarkSide} alt="" />
            </button>

            <button onClick={() => isTheme.change(THEME_DARK)}>
                <img src={imgFalcon} alt="" />
            </button>

            <button onClick={() => isTheme.change(THEME_NEITRAL)}>
                <img src={imgLightSide} alt="" />
            </button>

        </div>
    );
}

export default Choseside;
