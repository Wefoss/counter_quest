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
    if (isNaN(Number(target.value))) {
      return;
    }
    this.setState({
      parentRange: target.value,
    });
  };

  render() {
    const { parentRange } = this.state;
    return (
      <>
      <div className='main_app'>
      <CounterInputRange change={this.changeRange} />
        <CounterMain range={parentRange} />
      </div>
        
      </>
    );
  }
}

export default App;
