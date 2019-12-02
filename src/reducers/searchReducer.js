import { SEARCH } from '../actions/types';

const initialState = {
    imageHead: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/',
    imageTail: '/PNG',
    widgetHead: 'https://pubchem.ncbi.nlm.nih.gov/compound/',
    widgetTail: '#section=IUPAC-Name&embed=true',
    term: 'glucose'
}

export default function(state = initialState, action) {
    switch(action.type) {
       case SEARCH:
            return {
                ...state,
                term: action.payload
            };
        default:
            return state;
    }
}