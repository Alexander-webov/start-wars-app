import React from 'react';
import Uivideo from '../UI/UIVideo/UIVideo';
import video from './video/error-video.mp4';

import styles from './ErrorMesage.module.css'
const Errormesage = () => {
    return (
        <div className={styles.error__message}>
            <p>
                Темная сторона силы победила.
                Мы не можем отображать данные.
                Вернитесь, когда мы все исправим
            </p>
            <div>
                <Uivideo src={video} />
            </div>
        </div>
    );
}

export default Errormesage;
