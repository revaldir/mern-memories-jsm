import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signIn = (formData, history) => async (dispatch) => {
    try {
        // Sign in the user
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });
        // Redirect to home page
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signUp = (formData, history) => async (dispatch) => {
    try {
        // Sign up the user
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });
        // Redirect to home page
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}
