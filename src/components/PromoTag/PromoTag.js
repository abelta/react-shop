import React, { PureComponent, PropTypes } from 'react'
import classNames from 'classnames'
import './PromoTag.css'

class PromoTag extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.node
  }

  render () {
    return (
      <span className={classNames('PromoTag', this.props.type)}>
        {this.props.children}
      </span>
    )
  }
}

export default PromoTag
