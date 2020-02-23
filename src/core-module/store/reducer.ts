import { ActionDef, ApplicationState, ApplicationAction } from './types';
import produce from 'immer';

const aData = require('../data/data.json')


export const initialState: ApplicationState = {
    isLoading: false,
    jsonData: aData,
    user: {name: ''}
}

export default (state = initialState, action: ApplicationAction) => {
    switch (action.type) {
        case ActionDef.SET_LOADING: 
            return produce(state, draft => {
                draft.isLoading = action.payload;
            });

        case ActionDef.SET_LOGIN:
            return produce(state, draft => {
                draft.user = action.payload;
            });
    }

    return state
}