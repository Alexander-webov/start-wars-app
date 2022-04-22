import { SWAPI_PEOPLE, SWAPI_PARAM_PEOPLE, HTTPS, SWAPI_ROOT, URL_IMG_PERSONE, GUIDE_IMG_EXTENSION } from '../constants/api'

export const getPeoplePageId = (url) => {
    const pos = url.lastIndexOf(SWAPI_PARAM_PEOPLE)
    const id = url.slice(pos + SWAPI_PARAM_PEOPLE.length, url.length)
    return Number(id)
}

const getId = (url, category) => {
    const id = url.replace(HTTPS + SWAPI_ROOT + category, '').replace(/\//g, '')
    return id;
}

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE)


export const getPeopleImage = (id) => `${URL_IMG_PERSONE}/${id}${GUIDE_IMG_EXTENSION}`
