import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as consts from '../../constants'
import { round } from '../../helpers'
import { subtotalSelector, vatSelector, shippingCostSelector, shoppingCartTotalSelector }
  from '../../selectors/ShoppingCartSelector'
import './ShoppingCartSummary.css'

class ShoppingCartSummary extends PureComponent {
  static propTypes = {
    shoppingCart: PropTypes.object,
    subtotal: PropTypes.number,
    vat: PropTypes.number,
    shippingCost: PropTypes.number,
    total: PropTypes.total
  }

  render () {
    return (
      <section className='shopping-cart__summary'>
        <p>Subtotal: ${this.props.subtotal}</p>
        <p>VAT: ({consts.VAT}%) ${round(this.props.vat, 2)}</p>
        <p>Shipping cost: ${this.props.shippingCost}</p>
        <p>TOTAL: ${round(this.props.total, 2)}</p>
      </section>

    )
  }
}

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart,
  subtotal: subtotalSelector(state),
  vat: vatSelector(state),
  shippingCost: shippingCostSelector(state),
  total: shoppingCartTotalSelector(state)
})

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartSummary)
