import React from 'react';
import styles from './PersonInfo.module.css'

const Personinfo = ({ personeInfo }) => {
    return (
        <div className={styles.personeInfo}>
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
