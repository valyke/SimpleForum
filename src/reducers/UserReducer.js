import {
	GET_EMAIL,
	GET_PASSWORD,
	FETCH_USER,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: '',
	user: [],
	loggedIn: false,
	loading: false,
	token: '',
	error: []
};

export default (state = INITIAL_STATE, action) => {

	switch(action.type) {
		case GET_EMAIL:
			 return { ...state, email: action.payload }
		case GET_PASSWORD:
			return { ...state, password: action.payload }

		case FETCH_USER:
			return { ...state, loading: true, loggedIn: false }

		case FETCH_USER_SUCCESS: 
			return { ...state,
			 loggedIn: true,
			 loading: false, 
			 user: action.payload, 
			 error: '', 
			 token: action.payload.token 
			}

		case FETCH_USER_FAIL:
			return { ...state, loggedIn: false, loading: false, error: action.payload }

		default:
			return state
	} 
};