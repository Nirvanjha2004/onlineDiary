import { combineReducers } from '@reduxjs/toolkit'
import  userSliceReducer  from '../features/counter/userSlice';
import themeSliceReducer from '../features/counter/themeSlice';
import entrySliceReducer  from '../features/counter/entries';


const rootReducer = combineReducers({
	user : userSliceReducer,
	theme: themeSliceReducer,
	entry: entrySliceReducer
})

export default rootReducer;