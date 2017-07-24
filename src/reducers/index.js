import { combineReducers } from 'redux'
import userstate from './userstate'
import setActive from '../blocks/nav/reducer'
import setActiveElem from './setActiveElem'

export default combineReducers({
	userstate,
	setActive,
	setActiveElem
})
