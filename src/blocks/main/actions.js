export function sendForm(form) {
	return {
		type: 'SEND_FORM',
		payload: form
	}
}