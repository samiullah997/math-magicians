import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="txt-area">0</div>
        <div className="input-area">
          <div className="row">
            <div>Ac</div>
            <div>+/-</div>
            <div>%</div>
            <div className="orange">÷</div>
          </div>
          <div className="row">
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div className="orange">x</div>
          </div>
          <div className="row">
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div className="orange">-</div>
          </div>
          <div className="row">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div className="orange">+</div>
          </div>
          <div className="row">
            <div className="btn-zero">0</div>
            <div>.</div>
            <div className="orange">=</div>
          </div>
        </div>
      </div>
    );
  }
}
