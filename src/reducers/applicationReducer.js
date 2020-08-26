import { ERROR, GET_APPLICATIONS, UPDATE_APPLICATION, CLEAR_CURRENT, SET_CURRENT, SET_LOADING, SEARCH_APPLICATION_ID } from '../actions/types'
const initialState = {
    applications: null,
    current: null,
    loading: false,
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state, loading: true
            }
        case GET_APPLICATIONS:

            return {
                ...state,
                applications: action.payload.candidatelist,
                loading: false,
            }
        case ERROR:

            return {
                ...state,
                error: action.payload
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case UPDATE_APPLICATION:
            console.log(action);
            if (action.payload != null) {
                return {
                    ...state,
                    applications: state.applications.map(app => {
                        if (action.payload.id === app.id) {
                            return { ...app, status: action.payload.status }
                        } else {
                            return app;
                        }
                    })
                }
            } else {
                return { ...state }
            }
        case SEARCH_APPLICATION_ID:
            if (action.payload !== '') {
                return {
                    ...state,
                    applications: state.applications.map(app => {
                        if (action.payload === app.id) {
                            return app;
                        }
                    })
                }

            } else {
                return { ...state, applications: [] };
            }

        default:
            return state;
    }
}