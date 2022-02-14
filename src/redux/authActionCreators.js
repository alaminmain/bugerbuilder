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

export const authLoading = isLoading => {
    return {
        type: actionTypes.AUTH_LOADING,
        payload: isLoading,
    }
}

export const authFailed = errMsg => {
    return {
        type: actionTypes.AUTH_FAILED,
        payload: errMsg,
    }
}

export const auth = (email, password, mode) => dispatch => {

    dispatch(authLoading(true));
    

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
                dispatch(authLoading(false));
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('userId', response.data.localId);
                const expirationTime = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('expirationTime', expirationTime);
                dispatch(authSuccess(response.data.idToken, response.data.localId));

            })
            .catch(err => {
                dispatch(authLoading(false));
                dispatch(authFailed(err.response.data.error.message));
            })
            ;
    

}


export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationTime');
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const authCheck = () => dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
        dispatch(logout());
    }
    else {
        const expirationTime = new Date(localStorage.getItem('expirationTime'));
        if (expirationTime <= new Date()) {
            dispatch(logout());
        }
        else {
            const userId = localStorage.getItem("userId");
            dispatch(authSuccess(token, userId));
        }
    }
}