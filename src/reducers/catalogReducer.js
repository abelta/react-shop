import * as types from '../actionTypes'

export default function catalogReducer (state = { items: [ ] }, action) {
  switch (action.type) {
    case types.GET_CATALOG: {
      return { items: action.items }
    }
    case types.SET_ITEM_APART_FROM_CATALOG: {
      let clonedItems = JSON.parse(JSON.stringify(state.items))
      console.log('clonedItems', clonedItems)
      const index = clonedItems.findIndex((elem) => elem.id === action.id)
      clonedItems[index].available--
      console.log('updatedItems', clonedItems)
      return { items: clonedItems }
    }
    default: {
      return state
    }
  }
}
