import React, { Component } from 'react'
import logo from './logo.svg'
import Catalog from './containers/Catalog'
import ShoppingCart from './containers/ShoppingCart'
import './App.css'

class App extends Component {
  render () {
    return (
      <section className='app container'>
        <header className='app-header row'>
          <img src={logo} className='app-logo' alt='logo' />
          <h1 className='app-title'>React Shop</h1>
        </header>
        <section className='row'>
          <Catalog className='six columns' />
          <ShoppingCart className='six columns' />
        </section>
      </section>
    )
  }
}

export default App
