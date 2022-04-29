import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Peoplelist from '../../components/PeoplePage/PeopleList/PeopleList';

const Favoritepage = () => {

    const [people, setpeople] = useState([]);


    const storeDate = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const arr = Object.entries(storeDate)
        if (arr.length) {
            const res = arr.map(item => ({
                id: item[0],
                name: item[1].name,
                img: item[1].img,
            }))
            setpeople(res);
        }
    }, []);


    return (
        <div>
            <Peoplelist people={people} />
        </div>
    );
}

export default Favoritepage;
