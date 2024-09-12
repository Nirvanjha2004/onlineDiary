import { combineReducers } from '@reduxjs/toolkit'
import  userSliceReducer  from '../features/counter/userSlice';
import themeSliceReducer from '../features/counter/themeSlice';


const rootReducer = combineReducers({
	user : userSliceReducer,
	theme: themeSliceReducer
})

export default rootReducer;