import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from "../types"


export const setPersonToFavorite = (person) => ({
    type: ADD_PERSON_TO_FAVORITE,
    payload: person
})

export const removePersonFromFavorite = (personId) => ({
    type: REMOVE_PERSON_FROM_FAVORITE,
    payload: personId
})