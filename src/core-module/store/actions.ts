import { ActionDef, SetLoading, SetLogin, ApplicationAction} from './types';
type DispatchAll = (arg: ApplicationAction) => (ApplicationAction);

export const setLoading = (state: boolean): SetLoading => {
    return {
        type: ActionDef.SET_LOADING,
        payload: state
    }
}

export const setLogin = (username: string): SetLogin => {
    return {
        type: ActionDef.SET_LOGIN,
        payload: { name: username }
    }
}

export const Login = (username: string, 
                      password: string, 
    onComplete: (success: boolean) => void) => (dispatch: DispatchAll) =>  
{
    dispatch(setLoading(true))

    setTimeout(() => {
        if (password === 'secret') {
            dispatch(setLogin(username))
            onComplete(true)

        } else {
            onComplete(false)
        }

        dispatch(setLoading(false))
    }, 1000);
}