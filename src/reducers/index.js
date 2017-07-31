import { combineReducers } from 'redux'
import userstate from './userstate'
import setActive from '../blocks/nav/reducer'
import sendForm from '../blocks/main/reducer'

export default combineReducers({
	userstate,
	setActive,
	sendForm
})
