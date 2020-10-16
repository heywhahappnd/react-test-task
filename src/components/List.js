import React, { Component } from "react";
import ReactDOM from "react-dom";
import ListItem from "./ListItem";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
        listItems: [
            {
                addPrice: '50',
                getPrice: '100'
            },
            {
                addPrice: '100',
                getPrice: '200'
            },
            {
                addPrice: '500',
                getPrice: '1000'
            }
        ],
        currentPrice: '100'
    }

    this.setPrice = this.setPrice.bind(this);
    this.alertHandler = this.alertHandler.bind(this);
  }

  setPrice(price) {
      this.setState({
        ...this.state,
        currentPrice: price
      });
  }

  alertHandler() {
      let payment = document.getElementById('select').options[document.getElementById('select').selectedIndex].text;
      alert('Зачислено - $' + this.state.currentPrice + '\n' + 'Метод оплаты: - ' + payment);
  }
  render() {

    const list = this.state.listItems.map((item, index) => {
        return <ListItem  className='' handler={this.setPrice} key={index} item={item} />
    });
    
    return (
        <React.Fragment>
            <ul className="priceOptions">{list}</ul>
            <p className="price-info">
                <span>${this.state.currentPrice},00</span> будет зачислено вам на счет</p>
            <a onClick={this.alertHandler} className="add-btn">Пополнить</a>
        </React.Fragment>
    );
  }
}

export default List;
