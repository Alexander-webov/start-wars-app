import React from 'react';
import { useNavigate } from "react-router-dom";

import styles from './PersonLinkBack.module.css'

const Personlinkback = () => {
    const history = useNavigate()
    const handelGoBack = () => {
        history(-1)
    }
    return (
        <div className={styles.goBack} onClick={handelGoBack}>
            <span>{'<'}</span>
            Назад

        </div >
    );
}

export default Personlinkback;
