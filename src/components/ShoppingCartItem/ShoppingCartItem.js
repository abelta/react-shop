import React, { PureComponent, PropTypes } from 'react'
import classNames from 'classnames'
import PromoTag from '../PromoTag'
import './ShoppingCartItem.css'

class ShoppingCartItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    promo: PropTypes.string,
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
      <article className={classNames('shopping-cart__item', 'active')}
        onClick={this.onClick}>
        <span className='shopping-cart__item__name'>
          {this.props.name}
        </span>
        <span className='shopping-cart__item__quantity'>
          {this.props.quantity - this.props.gift}
        </span>
        {this.props.gift > 0 &&
          <span className='shopping-cart__item__gift'>+{this.props.gift}</span>}
        <span className='shopping-cart__item__cost'>
          ${(this.props.quantity - this.props.gift) * this.props.price}
        </span>
        {this.props.gift > 0 &&
          <PromoTag type={this.props.promo}>{this.props.promo}</PromoTag>}
        <span className='shopping-cart__item__remove-message'>
          Click to remove
        </span>
      </article>
    )
  }
}

export default ShoppingCartItem
