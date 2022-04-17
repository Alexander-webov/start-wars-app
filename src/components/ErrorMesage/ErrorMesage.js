import React from 'react';

import styles from './ErrorMesage.module.css'
const Errormesage = () => {
    return (
        <div className={styles.error__message}>
            Темная сторона силы победила.
            Мы не можем отображать данные.
            Вернитесь, когда мы все исправим
        </div>
    );
}

export default Errormesage;
