import React, { useState, useEffect } from 'react';
import { makeConcurrentRequest, changeHTTP } from '../../../utils/network';

import styles from './PersonFilms..module.css'


const Personfilms = ({ personFilms }) => {
    const [filmsName, setFilmsName] = useState([]);

    useEffect(() => {
        (async () => {
            const filmsHTTPS = personFilms.map(url => changeHTTP(url))
            const res = await makeConcurrentRequest(filmsHTTPS)
            setFilmsName(res);
        })();

    }, []);




    return (
        <div className={styles.filmsName}>
            <h3>Episodes</h3>

            <ul >
                {
                    filmsName
                        .sort((x, y) => x.episode_id - y.episode_id)
                        .map(({ title, opening_crawl, episode_id }) => {
                            return (
                                <li key={episode_id}>
                                    Episode - {episode_id}:
                                    <span> {title}</span>
                                </li>
                            )
                        })
                }
            </ul>

        </div>
    );
}

export default Personfilms;
