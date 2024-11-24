import {Type} from './action.type'

export const initialState = {
    basket:[]
}

export const reducer = (state, action) => {
    console.log('Action received in reducer:', action); // Debugging log
    switch (action.type) {
        case 'ADD_TO_BASKET':
            console.log('Adding to basket:', action.item); // Debugging log
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        default:
            return state;
    }
};
