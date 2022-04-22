import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getApiResource } from '../../utils/network';
import { useParams } from "react-router-dom";
import { API_PERSON } from '../../constants/api';
import { witherrorapi } from '../../utils/withErrorApi';
import { getPeopleImage } from '../../services/getPeopleData';
import Personinfo from '../../pages/PersonPage/PersonInfo/PersonInfo';
import Personimage from '../../pages/PersonPage/PersonImage/PersonImage';

import styles from './PersonPage.module.css'
import Personlinkback from './PersonLinkBack/PersonLinkBack';



const PersonPage = ({ setErrorApi }) => {
    const [personeInfo, setpersoneInfo] = useState(null);
    const [personName, setpersonName] = useState(null)
    const [personImage, setpersonImage] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const res = await getApiResource(`${API_PERSON}/${id}/`)
            if (res) {
                setErrorApi(false)
                setpersonImage(getPeopleImage(id))
                setpersoneInfo([
                    { title: 'Пол', data: res.gender },
                    { title: 'Год рождения', data: res.birth_year },
                    { title: 'Рост', data: res.height },
                    { title: 'Масса', data: res.mass },
                    { title: 'Цвет волос', data: res.hair_color },
                    { title: 'Цвет кожи', data: res.skin_color },
                ]);
                setpersonName(res.name)
                //res.films
            } else {
                setErrorApi(true)
            }

        })()

    }, []);

    return (
        <>
            <Personlinkback />



            <div className={styles.personPage}>

                <div>

                    <Personimage personImage={personImage} personName={personName} />

                </div>
                <div className={styles.personPage__info}>
                    <h1>{personName}</h1>
                    {
                        personeInfo && (
                            <Personinfo personeInfo={personeInfo} />
                        )
                    }
                </div>

            </div>

        </>

    );
}


PersonPage.propTypes = {
    setErrorApi: PropTypes.func,
}

export default witherrorapi(PersonPage);
