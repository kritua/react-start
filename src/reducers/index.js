import { combineReducers } from 'redux'
import userstate from './userstate'
import setActive from '../blocks/nav/reducer'

export default combineReducers({
	userstate,
	setActive
})
