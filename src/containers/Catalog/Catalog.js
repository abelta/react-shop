import React, { PureComponent } from 'react'
import CatalogItem from '../../components/CatalogItem'

class Catalog extends PureComponent {
  render () {
    return (
      <nav className='catalog'>
        <ul>
          {[1, 2, 3, 4].forEach(() => <CatalogItem name='nombre' available='10' />)}
        </ul>
      </nav>
    )
  }
}

export default Catalog
