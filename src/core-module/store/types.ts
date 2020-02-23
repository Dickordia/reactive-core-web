import { Action } from 'redux';

export enum ActionDef {
    SET_LOADING = 'SET_LOADING',
    SET_LOGIN = 'SET_LOGIN'
};

export interface User {
    name: string
}

export interface ApplicationState {
    isLoading: boolean;
    jsonData: string;
    user: User;
}

export interface SetLoading extends Action {
    type: ActionDef.SET_LOADING;
    payload: boolean;
}

export interface SetLogin extends Action {
    type: ActionDef.SET_LOGIN;
    payload: User;
}

export type ApplicationAction =
    | SetLoading
    | SetLogin

