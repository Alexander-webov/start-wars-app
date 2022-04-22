import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Uibutton from '../../UI/UiButton/uiButton';
import styles from './PeopleNavigation.module.css'





const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {

    const handleChangeNext = () => getResource(nextPage)
    const handleChangePrev = () => getResource(prevPage)



    return (
        <div className={styles.navigation}>
            <Link to={`/people/?page=${counterPage - 1}`}>
                <Uibutton
                    disabled={!prevPage}
                    onClick={handleChangePrev}
                    text={'Предыдущая стр.'}
                />

            </Link>
            <Link to={`/people/?page=${counterPage + 1}`}>
                <Uibutton
                    disabled={!nextPage}
                    onClick={handleChangeNext}
                    text={'Следующая стр.'}
                />
            </Link>
        </div>
    );
}


PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number
}

export default PeopleNavigation;
