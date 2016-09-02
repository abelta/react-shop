import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { removeItemFromShoppingCart } from '../../actions'
import shoppingCartSelector from '../../selectors/shoppingCartSelector'
import classNames from 'classnames'
import ShoppingCartItem from '../../components/ShoppingCartItem'
import ShoppingCartSummary from '../ShoppingCartSummary'
import './ShoppingCart.css'

class ShoppingCart extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    shoppingCartItems: PropTypes.array,
    removeItemFromShoppingCart: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.removeItem = this.removeItem.bind(this)
  }

  removeItem (item) {
    this.props.removeItemFromShoppingCart(item.id)
  }

  render () {
    const { shoppingCartItems } = this.props
    return (
      <section className={classNames('shopping-cart', this.props.className)}>
        <header>
          <h2 className='shopping-cart__title'>Shopping cart</h2>
        </header>
        <ul className='shopping-cart__list'>
          {shoppingCartItems.map((item, i) => (
            <li key={i}>
              <ShoppingCartItem {...item} onClick={this.removeItem} />
            </li>
          ))}
        </ul>
        {shoppingCartItems.length > 0 && <ShoppingCartSummary />}
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  shoppingCartItems: shoppingCartSelector(state)
})

const mapDispatchToProps = { removeItemFromShoppingCart }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
export { ShoppingCart as ShoppingCartRaw }
