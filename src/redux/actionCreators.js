import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addIngredient = igtype => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        payload: igtype,
    }
}

export const removeIngredient = igtype => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        payload: igtype,
    }
}

export const updatePurchasable = () => {
    return {
        type: actionTypes.UPDATE_PURCHASABLE,

    }
}
export const resetIngridents = () => {
    return {
        type: actionTypes.RESET_INGREDIENT,
    }
}

export const loadOrders = orders => {
    return {
        type: actionTypes.LOAD_ORDERS,
        payload: orders,
    }
}
export const orderLoadFailed = () => {
    return {
        type: actionTypes.ORDER_LOAD_FAILED,
    }
}

export const fetchOrders = () => dispatch => {
    axios.get("https://burger-builder-248c7-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json")
        .then(response => {
            dispatch(loadOrders(response.data));
        })
}
