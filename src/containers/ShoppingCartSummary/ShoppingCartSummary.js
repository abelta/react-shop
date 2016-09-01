import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as consts from '../../constants'
import PromoTag from '../../components/PromoTag'
import './ShoppingCartSummary.css'

class ShoppingCartSummary extends PureComponent {
  static propTypes = {
    shoppingCart: PropTypes.object
  }

  render () {
    const { shoppingCart } = this.props
    return (
      <section className='shopping-cart__summary'>
        <p className='shopping-cart__summary__subtotal'>
          Subtotal: ${shoppingCart.subtotal.value}
        </p>
        <p className='shopping-cart__summary__vat'>
          VAT: ({consts.VAT}%) ${shoppingCart.vat.value}
        </p>
        <p className='shopping-cart__summary__shipping-cost'>
          Shipping cost: ${shoppingCart.shippingCost.value}
          {shoppingCart.shippingCost.promo &&
            <PromoTag type={shoppingCart.shippingCost.promo}>
              {shoppingCart.shippingCost.promo}
            </PromoTag>}
        </p>
        <p className='shopping-cart__summary__total'>
          TOTAL: ${shoppingCart.total.value}
          {shoppingCart.total.promo &&
            <PromoTag type={shoppingCart.shippingCost.promo}>
              {shoppingCart.shippingCost.promo}
            </PromoTag>}
        </p>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart
})

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartSummary)
export { ShoppingCartSummary as ShoppingCartSummaryRaw }
