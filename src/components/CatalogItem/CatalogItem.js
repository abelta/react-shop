import React, { PureComponent, PropTypes } from 'react'
import classNames from 'classnames'
import './CatalogItem.css'

class CatalogItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    available: PropTypes.number,
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
      <span
        className={classNames('catalog-item', { 'active': this.props.available > 0 })}
        onClick={this.onClick}>
        <span className='catalog-item__name'>{this.props.name}</span>
        <span className='catalog-item__price'>${this.props.price}</span>
        <span className='catalog-item__available'>{this.props.available}</span>
      </span>
    )
  }
}

export default CatalogItem
