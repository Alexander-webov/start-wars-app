import React from 'react';
import styles from './PersonImage.module.css'
import { useDispatch } from 'react-redux';
import { setPersonToFavorite, removePersonFromFavorite } from '../../../store/actions';
import cn from 'classnames'

const Personimage = ({ personImage, personName, personId, personFavorite, setpersonFavorite }) => {
    const dispatch = useDispatch()

    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonFromFavorite(personId))
            setpersonFavorite(false)
        } else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personImage,
                }
            }))
            setpersonFavorite(true)
        }
    }

    return (
        <div className={styles.person__foto_wrapper}>
            <div className={styles.person__foto}>
                <img src={personImage} alt={personName} />
            </div>



            <img
                onClick={dispatchFavoritePeople}
                className={cn(styles.person__favorite)}
                src={personFavorite
                    ? "../assetc/img/favorite.svg"
                    : "../assetc/img/favorite-active.svg"}
                alt="favorite" />


        </div >
    );
}

export default Personimage;
