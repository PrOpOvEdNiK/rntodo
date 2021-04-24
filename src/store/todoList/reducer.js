import {
    TASK_ADD,
    TASK_REMOVE,
    TASK_COMPLETE,
    TASK_EDIT,
} from './actions';
import {findIndex} from 'lodash';

const initialState = {
    items: [
        {
            id: 0,
            text: 'Дело 1',
            isComplete: false
        },
        {
            id: 1,
            text: 'Дело 2',
            isComplete: false
        },
    ],
};

export default (state = initialState, {type, payload}) => {
    const items = state.items;

    switch (type) {
        case TASK_COMPLETE:
            const completedItemIndex = findIndex(items, {id: payload});
            items[completedItemIndex].isComplete = true;
        
            return {
                ...state,
                items
            };
            
        default:
            return state;
    }
};