import React, { Component } from 'react'
import '../Product/Product.css'

class CardProduct extends Component {
  state = {
    order: 4
  }

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue)
  }

  handlePlus = () => {
    this.setState({
      order: this.state.order + 1
    }, () => {
      this.handleCounterChange(this.state.order)
    })
  }

  handleMinus = () => {
    if(this.state.order > 0){
      this.setState({
        order: this.state.order - 1
      }, () => {
      this.handleCounterChange(this.state.order)
      })
    }
  }
  render() {
    return (
      <div className="card">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="placehorder here"/>
        <div className="container">
          <button onClick={this.handleMinus} className="button-minus">-</button>
          <input className="number-show" type="text" value={this.state.order}/>
          <button onClick={this.handlePlus} className="button-plus">+</button>
        </div>
      </div>
    )
  }
}

export default CardProduct