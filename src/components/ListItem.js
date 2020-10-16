import React, { Component } from "react";
import ReactDOM from "react-dom";

class ListItem extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        addToPrice: this.props.item.addPrice,
        getToPrice: this.props.item.getPrice,
    }

    this.handleFunc = this.handleFunc.bind(this);
  }

  handleFunc() {
      return this.props.handler(this.state.getToPrice);
  }

  render() {
    return (
        <li onClick={this.handleFunc}>
            <div className="add-block">
            <span className="top-span">
                Пополнить на 
            </span>
            <span className="price-span">$ {this.state.addToPrice}</span>
            </div>
            <div className="receive-block">
            <span className="bottom-span">
                Получить <br />
            </span>
            <span className="price-span">$ {this.state.getToPrice}</span>
            </div>
            <div className="circle-icon">
            
            </div>
    </li>
    );
  }
}

export default ListItem;
