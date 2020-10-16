import React, { Component } from "react";
import ReactDOM from "react-dom";

import List from "./List"

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
      payment: ''
    }

    this.handleExitClick = this.handleExitClick.bind(this);
    this.handleShowClick = this.handleShowClick.bind(this);
  }

  handleExitClick() {
     this.setState({
       ...this.state,
       isToggle: true
     })
  }

  handleShowClick() {
    this.setState({
      ...this.state,
      isToggle: false
    })
 }

  render() {
    return (
      <div>
        <div className="modal-window">
          <button onClick={this.handleShowClick}>Открыть модалку</button>
        </div>

        <div id="container" className={this.state.isToggle ? 'hidden' : ''}>
          <div onClick={this.handleExitClick} className="exit-icon">
          
          </div>
          <div className="procent-block">+100%</div>
            <div className="timer">
              <img src="" alt=""/>
            </div>
            <h3 className="heading">
              Увеличьте свой депозит!
            </h3>
            <div className="credit-card-icon">
            </div>
            <select id="select" name="bank-options" className="bank-options">
              <option value="bankCard">Банковскя карта</option>
              <option value="bitcoin">Биткоин</option>
              <option value="check">Выставить счет</option>
            </select>
            <List />
            <p className="add-price-info">При пополнении счета с банковской карты списание средств происходит по курсу банка клиента</p>
            <a href="#" className="btn-more">Подробнее</a>
          </div>
       
      </div>
    );
  }
}

export default AppComponent;
