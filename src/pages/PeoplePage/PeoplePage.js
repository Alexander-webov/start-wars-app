import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '../../services/getPeopleData';
import { changeHTTP, getApiResource } from '../../utils/network';
import Peoplelist from '../../components/PeoplePage/PeopleList/PeopleList';
import { witherrorapi } from '../../utils/withErrorApi';
import { useQueryParams } from '../../hooks/useQueryParams';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation/PeopleNavigation';




const Peoplepage = ({ setErrorApi }) => {

    const [people, setpeople] = useState([]);
    const [prevPage, setprevPage] = useState(null);
    const [nextPage, setnextPage] = useState(null);
    const [counterPage, setcounterPage] = useState(1);




    const query = useQueryParams();
    const queryPage = query.get('page')


    const getResource = async (url) => {
        const data = await getApiResource(url)
        if (data) {
            const peopleList = data.results.map(({ name, url }) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                return { name, url, img, id }
            })
            setpeople(peopleList);
            setprevPage(changeHTTP(data.previous))
            setnextPage(changeHTTP(data.next))
            setcounterPage(getPeoplePageId(url))
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }

    }

    useEffect(() => {
        getResource(API_PEOPLE + queryPage)
    }, [])


    return (
        <>
            <PeopleNavigation getResource={getResource} prevPage={prevPage} nextPage={nextPage} counterPage={counterPage} />
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
