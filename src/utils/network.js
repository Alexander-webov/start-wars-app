
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
/* (async () => {
    const data = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
    console.log(data);
})() */

