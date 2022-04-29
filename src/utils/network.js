import { HTTP, HTTPS } from "../constants/api";

/**
 * Изменяет URL с HTTP на HTTPS
 * @param {String} url 
 * @returns  {String} url c HTTPS
 */
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url
    return result;
}


export const getApiResource = async (url) => {
    try {
        const res = await fetch(url)
        if (!res.ok) {
            console.log(res.status);
            return false
        }
        const data = await res.json()
        return data

    } catch (error) {
        console.log(error);
        return false
    }
}

export const makeConcurrentRequest = async (urls) => {
    const res = await Promise.all(urls.map(res => {
        return fetch(res).then(res => res.json())
    }))
    return res;
}




/* (async () => {
    const data = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
    console.log(data);
})() */

