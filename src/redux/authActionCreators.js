import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token: token,
            userId: userId,
        }
    }
}

export const auth = (email, password, mode) => {
    return dispatch => {

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true,
        }

        const API_KEY = "AIzaSyBCeHLgosNGi_KhVyXWOB67rvZ3MzO7EGA";
        let apiUrl = null;
        if (mode === "Sign Up") {
            apiUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
        }
        else
            apiUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
        axios.post(apiUrl + API_KEY,
            authData)
            .then(response => {
                dispatch(authSuccess(response.data.idToken,response.data.localId));
                
            });
    }
}
export default auth;