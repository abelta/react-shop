import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as consts from '../../constants'
import { subtotalSelector, vatSelector, shippingCostSelector, shoppingCartTotalSelector }
  from '../../selectors/shoppingCartSelector'
import PromoTag from '../../components/PromoTag'
import './ShoppingCartSummary.css'

class ShoppingCartSummary extends PureComponent {
  static propTypes = {
    subtotal: PropTypes.object,
    vat: PropTypes.object,
    shippingCost: PropTypes.object,
    total: PropTypes.object
  }

  render () {
    const { subtotal, vat, shippingCost, total } = this.props
    return (
      <section className='shopping-cart__summary container'>
        <p className='shopping-cart__summary__subtotal row'>
          <span className='category six columns'>Subtotal:</span>
          <span className='value six columns'>
            ${subtotal.value}
            {subtotal.promo &&
              <PromoTag type={subtotal.promo}>
                {subtotal.promo}
              </PromoTag>}
          </span>
        </p>
        <p className='shopping-cart__summary__vat row'>
          <span className='category six columns'>VAT ({consts.VAT}%):</span>
          <span className='value six columns'>${vat.value}</span>
        </p>
        <p className='shopping-cart__summary__shipping-cost row'>
          <span className='category six columns'>Shipping cost:</span>
          <span className='value six columns'>
            ${shippingCost.value}
            {shippingCost.promo &&
              <PromoTag type={shippingCost.promo}>
                {shippingCost.promo}
              </PromoTag>}
          </span>
        </p>
        <p className='shopping-cart__summary__total row'>
          <span className='category six columns'>TOTAL:</span>
          <span className='value six columns'>
            ${total.value}
            {total.promo &&
              <PromoTag type={shippingCost.promo}>
                {shippingCost.promo}
              </PromoTag>}
          </span>
        </p>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  subtotal: subtotalSelector(state),
  vat: vatSelector(state),
  shippingCost: shippingCostSelector(state),
  total: shoppingCartTotalSelector(state)
})

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartSummary)
export { ShoppingCartSummary as ShoppingCartSummaryRaw }
