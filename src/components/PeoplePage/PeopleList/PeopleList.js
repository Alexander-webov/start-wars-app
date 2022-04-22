import React from 'react';
import PropTypes from 'prop-types';
import styles from './PeopleList.module.css'
import { Link } from 'react-router-dom';


const Peoplelist = ({ people }) => {
    return (
        <ul className={styles.list__container}>
            {
                people.map(({ name, img, id }) => {
                    return (
                        <li className={styles.list__item} key={name}>
                            <Link to={`/people/${id}`}>
                                <img className={styles.list__itemImage} src={img} alt={name} />
                                <span className={styles.list__itemName}>{name}</span>
                            </Link>
                        </li>
                    )
                })
            }

        </ul>
    );
}

Peoplelist.propTypes = {
    people: PropTypes.array,
}

export default Peoplelist;
