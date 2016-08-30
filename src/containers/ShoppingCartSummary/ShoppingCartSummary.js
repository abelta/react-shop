import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as consts from '../../constants'
import './ShoppingCartSummary.css'

class ShoppingCartSummary extends PureComponent {
  static propTypes = {
    shoppingCart: PropTypes.object
  }

  render () {
    return (
      <section className='shopping-cart__summary'>
        <p>Subtotal: ${this.props.shoppingCart.subtotal}</p>
        <p>VAT: ({consts.VAT}%) ${this.props.shoppingCart.vat}</p>
        <p>Shipping cost: ${this.props.shoppingCart.shippingCost}</p>
        <p>TOTAL: ${this.props.shoppingCart.total}</p>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart
})

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartSummary)
