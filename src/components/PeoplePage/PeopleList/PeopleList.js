import React from 'react';
import PropTypes from 'prop-types';
import styles from './PeopleList.module.css'

const Peoplelist = ({ people }) => {
    return (
        <ul className={styles.list__container}>
            {
                people.map(({ name, img }) => {
                    return (
                        <li className={styles.list__item} key={name}>
                            <a href="">
                                <img className={styles.list__itemImage} src={img} alt={name} />
                                <span className={styles.list__itemName}>{name}</span>
                            </a>
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
