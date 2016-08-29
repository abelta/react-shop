import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import getCatalog from '../../actions/getCatalog'
import setItemApartFromCatalog from '../../actions/setItemApartFromCatalog'
import addItemToShoppingCart from '../../actions/addItemToShoppingCart'
import CatalogItem from '../../components/CatalogItem'
import './Catalog.css'

class Catalog extends PureComponent {
  static propTypes = {
    getCatalog: PropTypes.func,
    catalog: PropTypes.object,
    addItemToShoppingCart: PropTypes.func,
    setItemApartFromCatalog: PropTypes.func
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
      this.props.setItemApartFromCatalog(item.id)
      this.props.addItemToShoppingCart(item.id)
    }
  }

  render () {
    return (
      <nav className='catalog'>
        <header>Catalog</header>
        <ul>
          {this.props.catalog.items.map((item) => (
            <li key={item.id}>
              <CatalogItem {...item} onClick={this.addToShoppingCart} />
            </li>))}
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    catalog: state.catalog
  }
}

const mapDispatchToProps = { getCatalog, setItemApartFromCatalog, addItemToShoppingCart }

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
