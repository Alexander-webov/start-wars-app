import React from 'react';
import styles from './PersonInfo.module.css'

const Personinfo = ({ personeInfo }) => {
    return (
        <div className={styles.personeInfo}>
            <h3>Информация</h3>
            <ul>
                {personeInfo.map(el => (
                    el.data && (
                        <li key={el.title}>
                            {el.title}:
                            <span>
                                {el.data}
                            </span>
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
}

export default Personinfo;
