import React from 'react';
import styles from './PersonImage.module.css'

const Personimage = ({ personImage, personName }) => {
    return (
        <div className={styles.person__foto}>
            <img src={personImage} alt={personName} />
        </div>
    );
}

export default Personimage;
