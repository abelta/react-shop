import { createSelector } from 'reselect'
import * as consts from '../constants'
import { round } from '../helpers'

const getShoppingCartItems = state => state.shoppingCart.items

const getCatalogItems = state => state.catalog.items

const shoppingCartSelector = createSelector(
  [getShoppingCartItems, getCatalogItems],
  (shoppingCartItems, catalogItems) => shoppingCartItems.map(
    shoppingCartItem => {
      const index = catalogItems.findIndex((catalogItem) => catalogItem.id === shoppingCartItem.id)
      return Object.assign(shoppingCartItem, catalogItems[index])
    }
  )
)

const subtotalSelector = createSelector(
  [shoppingCartSelector],
  (shoppingCartItems) => shoppingCartItems.reduce(
    (sum, item) => round((sum + item.price * item.quantity), 2)
    , 0
  )
)

const vatSelector = createSelector(
  [subtotalSelector],
  (subtotal) => round((subtotal * consts.VAT / 100), 2)
)

const shippingCostSelector = createSelector(
  [subtotalSelector],
  (subtotal) => subtotal < 50 ? consts.SHIPPING_COST : 0
)

const shoppingCartTotalSelector = createSelector(
  [subtotalSelector, vatSelector, shippingCostSelector],
  (subtotal, vat, shippingcost) => round((subtotal + vat + shippingcost), 2)
)

export default shoppingCartSelector
export { subtotalSelector, vatSelector, shippingCostSelector, shoppingCartTotalSelector }
