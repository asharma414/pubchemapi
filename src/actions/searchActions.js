import { SEARCH_CHEM_IMAGE, SEARCH_CHEM_WIDGET } from './types';

export const search = (searchData) => dispatch => {
    dispatch({
        type: SEARCH_CHEM_IMAGE,
        payload: searchData
    });
    dispatch({
        type: SEARCH_CHEM_WIDGET,
        payload: searchData
    })
}