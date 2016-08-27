import React, { PureComponent, PropTypes } from 'react'

class CatalogItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    available: PropTypes.integer
  }

  render() {
    return (
      <li className='catalog-item'>
        <span className='catalog-item__name'>{this.props.name}</span>
        <span className='catalog-item__available'>{this.props.available}</span>
      </li>
    )
  }
}


export default CatalogItem
