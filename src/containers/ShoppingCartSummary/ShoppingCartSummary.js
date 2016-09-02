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
      <section className='shopping-cart__summary container'>
        <p className='shopping-cart__summary__subtotal row'>
          <span className='category six columns'>Subtotal:</span>
          <span className='value six columns'>
            ${shoppingCart.subtotal.value}
            {shoppingCart.subtotal.promo &&
              <PromoTag type={shoppingCart.subtotal.promo}>
                {shoppingCart.subtotal.promo}
              </PromoTag>}
          </span>
        </p>
        <p className='shopping-cart__summary__vat row'>
          <span className='category six columns'>VAT ({consts.VAT}%):</span>
          <span className='value six columns'>${shoppingCart.vat.value}</span>
        </p>
        <p className='shopping-cart__summary__shipping-cost row'>
          <span className='category six columns'>Shipping cost:</span>
          <span className='value six columns'>
            ${shoppingCart.shippingCost.value}
            {shoppingCart.shippingCost.promo &&
              <PromoTag type={shoppingCart.shippingCost.promo}>
                {shoppingCart.shippingCost.promo}
              </PromoTag>}
          </span>
        </p>
        <p className='shopping-cart__summary__total row'>
          <span className='category six columns'>TOTAL:</span>
          <span className='value six columns'>
            ${shoppingCart.total.value}
            {shoppingCart.total.promo &&
              <PromoTag type={shoppingCart.shippingCost.promo}>
                {shoppingCart.shippingCost.promo}
              </PromoTag>}
          </span>
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
