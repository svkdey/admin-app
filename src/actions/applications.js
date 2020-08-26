
import { ERROR, GET_APPLICATIONS, UPDATE_APPLICATION, CLEAR_CURRENT, SET_CURRENT, SET_LOADING, SEARCH_APPLICATION_ID } from './types'
import axios from 'axios';

export const getApplcations = () => {
    return async (dispatch) => {
        try {
            setLoading();
            const res = await axios.get('https://cors-anywhere.herokuapp.com/https://candidate-app-telstra.herokuapp.com/api/get-applications', {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            dispatch({
                type: GET_APPLICATIONS,
                payload: res.data
            })

        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.response.data
            })
        }

    }
}
export const setCurrent = (log) => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export const updateApplication = (application) => {
    return async (dispatch) => {
        try {
            setLoading();
            const res = await axios.put(`https://cors-anywhere.herokuapp.com/https://candidate-app-telstra.herokuapp.com/api/put-applications/${application.id}`, application, {
                headers: {
                    'Content-Type': "application/json",
                }
            });
            console.log(res);
            dispatch({
                type: UPDATE_APPLICATION,
                payload: res.data === 'success' ? application : { id: "-999" }
            })

        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        }

    }
}
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT,
    }
}

export const searchApplicationId = (id) => {
    //redux thunk returns a functon that contains dispatch
    return async (dispatch) => {
        try {
            setLoading();
            dispatch({
                type: SEARCH_APPLICATION_ID,
                payload: id
            })

        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        }

    }
}
