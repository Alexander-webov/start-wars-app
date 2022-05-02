import React, { useState, useEffect } from 'react';
import { getApiResource } from '../../utils/network';
import { API_SEARCH } from '../../constants/api';
import { witherrorapi } from '../../utils/withErrorApi';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import Searchpageinfo from '../../components/SearchPage/SearchPageInfo/SearchPageInfo';

const Searchpage = ({ setErrorApi }) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setpeople] = useState([]);

    const getResponse = async (param) => {
        const res = await getApiResource(API_SEARCH + param);
        console.log(res);
        if (res) {
            setErrorApi(false)
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id)
                return {
                    id,
                    name,
                    img
                }
            })
            setpeople(peopleList)
        } else {
            setErrorApi(true)
        }
    }
    useEffect(() => {
        getResponse('')
    }, []);







    const handelInputChange = (e) => {
        const value = e.target.value
        setInputSearchValue(value);
        getResponse(value)
    }


    return (
        <div>
            <h1 className="header__text">Search</h1>
            <input
                type="text"
                value={inputSearchValue}
                onChange={handelInputChange}
            />

            <div>
                <Searchpageinfo people={people} />
            </div>
        </div>
    );
}

export default witherrorapi(Searchpage);
