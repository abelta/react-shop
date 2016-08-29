import React, { PureComponent, PropTypes } from 'react'

class ShoppingCartItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.price
  }

  render () {
    return (
      <span className='shopping-cart__item'>
        <span className='shopping-cart__item__name'>{this.props.name}</span>
        <span className='shopping-cart__item__quantity'>{this.props.quantity}</span>
        <span className='shopping-cart__item__cost'>${this.props.quantity * this.props.price}</span>
      </span>
    )
  }
}

export default ShoppingCartItem
