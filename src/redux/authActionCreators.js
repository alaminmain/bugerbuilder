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
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('userId', response.data.localId);
                const expirationTime = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('expirationTime', expirationTime);
                dispatch(authSuccess(response.data.idToken, response.data.localId));

            });
    }

}

export const authCheck = () => dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
        //logout
    }
    else {
        const expirationTime = new Date(localStorage.getItem('expirationTime'));
        if (expirationTime <= new Date()) {
            //logout
        }
        else {
            const userId = localStorage.getItem("userId");
            dispatch(authSuccess(token, userId));
        }
    }
}