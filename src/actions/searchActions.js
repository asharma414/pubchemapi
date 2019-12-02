import { SEARCH } from './types';

export const search = (searchData) => dispatch => {
    dispatch({
        type: SEARCH,
        payload: searchData
});
}