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
  (shoppingCartItems) => {
    const sum = shoppingCartItems.reduce(
      (sum, item) => round((sum + item.price * (item.quantity - item.gift)), 2)
      , 0
    )
    return {
      value: sum < 100 ? sum : sum - sum * 10 / 100,
      promo: sum < 100 ? null : consts.PROMOS.TEN_PERCENT_DISCOUNT
    }
  }
)

const vatSelector = createSelector(
  [subtotalSelector],
  (subtotal) => ({
    value: round((subtotal.value * consts.VAT / 100), 2)
  })
)

const shippingCostSelector = createSelector(
  [subtotalSelector],
  (subtotal) => ({
    value: subtotal.value < 50 ? consts.SHIPPING_COST : 0,
    promo: subtotal.value < 50 ? null : consts.PROMOS.FREE_SHIPPING
  })
)

const shoppingCartTotalSelector = createSelector(
  [subtotalSelector, vatSelector, shippingCostSelector],
  (subtotal, vat, shippingcost) => ({
    value: round((subtotal.value + vat.value + shippingcost.value), 2)
  })
)

export default shoppingCartSelector
export { subtotalSelector, vatSelector, shippingCostSelector, shoppingCartTotalSelector }
