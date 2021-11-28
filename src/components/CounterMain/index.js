import React, { Component } from "react";
import style from "./counter.module.css";
import CounterBtn from "../CounterBtn";

class CounterMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      switchBtn: true,
    };
    this.defultNumCounter = 1;
    this.step = 1000;
    this.interval = 5000;
    this.setInterval = null;
  }

  checbox = (e) => {
    this.setState({
      switchBtn: e.currentTarget.checked ? true : false,
    });
  };

  tick = () => {
    const { range } = this.props;
    const { switchBtn } = this.state;
    this.setState((state) => {
      return {
        counter: switchBtn
          ? state.counter + (this.defultNumCounter || range)
          : state.counter > 0
          ? state.counter - (this.defultNumCounter || range)
          : 0,
      };
    });
  };

  componentDidMount() {
    this.autoClick();
    setTimeout(() => {
      clearInterval(this.setInterval);
      this.setInterval = null;
    }, this.interval);
  }

  autoClick = () => {
    if (!this.setInterval) {
      this.setInterval = setInterval(this.tick, this.step);
      setTimeout(() => {
        clearInterval(this.setInterval);
        this.setInterval = null;
      }, this.interval);
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.range !== this.props.range) {
      return false;
    }

    return true;
  }

  toggleBtn = (str) => {
    const { range } = this.props;
    this.setState((state) => {
      if (str === "del" && state.counter < range)
        return { counter: (state.counter = 0) };
      return {
        counter: str === "add" ? state.counter + range : state.counter - range,
      };
    });
  };

  render() {
    console.log("render");
    const { counter, switchBtn } = this.state;
    return (
      <div className={style.main}>
        <p>Counter: {counter}</p>
        <CounterBtn swith={switchBtn} toggleBtn={this.toggleBtn} />
        <button onClick={this.autoClick}>autoClick</button>
        <input type="checkbox" onChange={this.checbox} checked={switchBtn} />
        <p>
          AutoClick will work <b>{this.interval / 1000}</b> sec
        </p>
      </div>
    );
  }
}

export default CounterMain;
