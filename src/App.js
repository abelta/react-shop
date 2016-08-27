import React, { Component } from 'react'
import logo from './logo.svg'
import Catalog from './containers/Catalog'
import ShoppingCart from './containers/ShoppingCart'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>React Shop</h2>
        </div>
        <Catalog />
        <ShoppingCart />
      </div>
    )
  }
}

export default App
