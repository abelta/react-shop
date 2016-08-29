import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import shoppingCartSelector from '../../selectors/ShoppingCartSelector'
import ShoppingCartItem from '../../components/ShoppingCartItem'
import ShoppingCartSummary from '../ShoppingCartSummary'
import './ShoppingCart.css'

class ShoppingCart extends PureComponent {
  static propTypes = {
    shoppingCartItems: PropTypes.array
  }

  render () {
    return (
      <section className='shopping-cart'>
        <header>Shopping cart</header>
        <ul>
          {this.props.shoppingCartItems.map((item) => (
            <li>
              <ShoppingCartItem {...item} />
            </li>
          ))}
        </ul>
        {this.props.shoppingCartItems.length > 0 && <ShoppingCartSummary />}
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  shoppingCartItems: shoppingCartSelector(state)
})

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
