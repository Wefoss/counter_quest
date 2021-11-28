import { Component } from "react";
import "./App.css";
import CounterMain from "./components/CounterMain";
import CounterInputRange from "./components/CounterInputRange";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentRange: 5,
    };
  }

  changeRange = ({ target }) => {
    console.log();
        if (isNaN(Number(target.value)) || Number(target.value) < 0) {
      return;
    }
    this.setState({
      parentRange: +target.value,
    });
  };

  render() {
    const { parentRange } = this.state;
    return (
      <>
      <div className='main_app'>
      <CounterInputRange change={this.changeRange} val={parentRange} />
        <CounterMain range={parentRange} />
        <p>range: {parentRange}</p>
      </div>
        
      </>
    );
  }
}

export default App;
