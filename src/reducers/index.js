import { combineReducers } from 'redux'
import catalogReducer from './catalogReducer'
import shoppingCartReducer from './shoppingCartReducer'

export default combineReducers({
  catalog: catalogReducer,
  shoppingCart: shoppingCartReducer
})
