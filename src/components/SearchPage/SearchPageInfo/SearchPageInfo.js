import React from 'react';
import { Link } from 'react-router-dom';

import style from './SearchPageInfo.module.css'

const Searchpageinfo = ({ people }) => {
    console.log(people);
    return (
        <div>
            {people.length ?
                <ul className={style.searchInfo}>
                    {people.map(({ id, name, img }) => (
                        <li key={id}>
                            <Link to={`/people/${id}`}>
                                <img src={img} alt={name} />
                                <h3>{name}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>

                : <h2>Нет результата</h2>
            }
        </div>
    );
}

export default Searchpageinfo;
