// 6. Use Class for create a component
// function Post(props) {
//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <p>{props.content}</p>
//     </div>
//   )
// }

class Post extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
      </div>
    )
  }
}


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.isMyYear = false;
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        <Post title="Post 1" content="Continut 1" />
        <Post title="Post 2" content="Continut 2" />
        <Post title="Post 3" content="Continut 3" />
        <Post title="Invat React" content="Continut 4" />
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'))







