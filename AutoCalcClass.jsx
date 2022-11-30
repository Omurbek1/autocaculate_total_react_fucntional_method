import React from "react";

export default class Class extends React.Component {

  constructor() {
    super();
    this.state = {
      price: null,
      quantity: null,
      result: 0
    };
    this.quanchangeFirstNumber=this.quanchangeFirstNumber.bind(this)
    this.changeSecondNumber=this.changeSecondNumber.bind(this)
  }

  quanchangeFirstNumber(e) {
    this.setState({price: +e.target.value})
    this.setState({
      result: +this.state.price * this.state.quantity
    });
  }
  changeSecondNumber( e) {
    this.setState({quantity: +e.target.value})

    this.setState({
      result: +this.state.price * this.state.quantity
    
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.result !== this.state.result) {
      console.log("cahn", prevProps, prevState);
      
    }
    else{
      console.log('sss')
    }
  }

  render() {
    return (
      <div className="App">
        Price:
        <input
          type="text"
          value={this.state.price}
          onChange={(e) => this.quanchangeFirstNumber(e)}
        />
        <br />
        quantity:
        <input
          type="text"
          value={this.state.quantity}
          onChange={(e) => this.changeSecondNumber(e)}
        />
        <br />
        Result: {this.state.result}
      </div>
    );
  }
}
