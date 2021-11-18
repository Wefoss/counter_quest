import React, { Component } from "react";
import style from "./counter.module.css";
import CounterBtn from "../CounterBtn";

class CounterMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      swithBtn: true,
    };
  }

  checbox = (e) => {
    this.setState({
      swithBtn: e.currentTarget.checked ? true : false,
    });
  };

  toggleBtn = (str) => {
    const { range } = this.props;
    const { counter } = this.state;
    this.setState({
      counter: str === "add" ? counter + +range : counter - +range,
    });
  };

  render() {
    const { counter, swithBtn } = this.state;
    const { range } = this.props;
    return (
      <div className={style.main}>
        <p>Counter: {counter}</p>
        <CounterBtn swith={swithBtn} toggleBtn={this.toggleBtn} />
        <input type="checkbox" onChange={this.checbox} checked={swithBtn} />
        <p>Range: {range}</p>
      </div>
    );
  }
}

export default CounterMain;
