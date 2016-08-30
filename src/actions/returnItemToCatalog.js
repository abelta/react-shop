import * as types from '../actionTypes'

const returnItemToCatalog = (id) => ({
  type: types.RETURN_ITEM_TO_CATALOG,
  id
})

export default returnItemToCatalog
