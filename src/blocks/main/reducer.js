const initialState = {};

export default function sendForm(state = initialState, action) {
	switch(action.type) {
		case 'SEND_FORM':
			return {
				...state,
				...action.payload
			};

		default:
			return state
	}
}