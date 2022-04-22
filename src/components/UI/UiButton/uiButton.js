import React from 'react';
import cn from 'classnames'

import styles from './uiButton.module.css'

const Uibutton = ({ text, onClick, disabled, classes, theme = 'dark' }) => {
    return (
        <button
            className={cn(styles.button, styles[theme], classes)}
            onClick={onClick}
            disabled={disabled}
        >{text}</button>
    );
}

export default Uibutton;
