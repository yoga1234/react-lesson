import React, { Component } from 'react'
import './Product.css'
import CardProduct from '../CardProduct/CardProduct'

class Product extends Component {
  state = {
    order: 4
  }

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue
    })
  }

  render() {
    return (
      <div className="content-container">
        <div className="header">
          <p>total: {this.state.order}</p>
        </div>
        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
      </div>
    )
  }
}

export default Product