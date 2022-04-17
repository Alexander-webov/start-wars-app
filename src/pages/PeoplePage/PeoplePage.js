import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import { getApiResource } from '../../utils/network';
import Peoplelist from '../../components/PeoplePage/PeopleList/PeopleList';
import { witherrorapi } from '../../utils/withErrorApi';



const Peoplepage = ({ setErrorApi }) => {

    const [people, setpeople] = useState([]);



    const getResource = async (url) => {
        const data = await getApiResource(url)
        if (data) {
            const peopleList = data.results.map(({ name, url }) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                return { name, url, img }
            })
            setpeople(peopleList);
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }

    }

    useEffect(() => {
        getResource(API_PEOPLE)
    }, [])


    return (
        <>

            {
                people.length > 0
                    ? <Peoplelist people={people} />
                    : null
            }

        </>
    );
}

Peoplepage.propTypes = {
    setErrorApi: PropTypes.func,
}

export default witherrorapi(Peoplepage);
