import React, { PureComponent, PropTypes } from 'react'
import PromoTag from '../PromoTag'
import './ShoppingCartItem.css'

class ShoppingCartItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    promo: PropTypes.array,
    gift: PropTypes.number,
    onClick: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.props.onClick(this.props)
  }

  render () {
    return (
      <span className='shopping-cart__item' onClick={this.onClick}>
        <span className='shopping-cart__item__name'>{this.props.name}</span>
        <span className='shopping-cart__item__quantity'>{this.props.quantity}</span>
        {this.props.gift.length > 0 &&
          <span className='shopping-cart__item__gift'>+{this.props.gift}</span>}
        <span className='shopping-cart__item__cost'>${this.props.quantity * this.props.price}</span>
        {this.props.promo.map((promo, i) => <PromoTag key={i} type={promo}>{promo}</PromoTag>)}
      </span>
    )
  }
}

export default ShoppingCartItem
