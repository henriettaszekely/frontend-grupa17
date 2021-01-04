// 9. State - Counter
class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    } // valori care schimba interfata ( UI )

    // this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter = () => {
    // console.log('click button');
    const newCounter = this.state.counter + 1;
    this.setState({ counter: newCounter });
  }

  render() {
    console.log('counterApp - render call');
    return (
      <div>
        <span style={{ fontSize: '30px', padding: '20px' }}>
          {this.state.counter}
        </span>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    )
  }
}

ReactDOM.render(<CounterApp />, document.getElementById('app'))







