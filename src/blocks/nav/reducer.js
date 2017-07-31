const initialState = {
	active: 0
};

export default function setActive(state = initialState, action) {
	switch(action.type) {
		case 'SET_ACTIVE':
			return {
				...state,
				active: action.payload
			};
			break;

		default:
			return state
	}
}