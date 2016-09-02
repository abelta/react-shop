import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getCatalog, addItemToShoppingCart } from '../../actions'
import classNames from 'classnames'
import CatalogItem from '../../components/CatalogItem'
import './Catalog.css'

class Catalog extends PureComponent {
  static propTypes = {
    getCatalog: PropTypes.func,
    catalog: PropTypes.object,
    className: PropTypes.string,
    addItemToShoppingCart: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.addToShoppingCart = this.addToShoppingCart.bind(this)
  }

  componentDidMount (props) {
    this.props.getCatalog()
  }

  addToShoppingCart (item) {
    if (item.available > 0) {
      this.props.addItemToShoppingCart(item.id)
    }
  }

  render () {
    return (
      <nav className={classNames('catalog', this.props.className)}>
        <header>
          <h2 className='catalog__title'>Catalog</h2>
        </header>
        <ul className='catalog__list'>
          {this.props.catalog.items.map((item) => (
            <li key={item.id}>
              <CatalogItem {...item} onClick={this.addToShoppingCart} />
            </li>))}
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  catalog: state.catalog
})

const mapDispatchToProps = { getCatalog, addItemToShoppingCart }

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
export { Catalog as CatalogRaw }
