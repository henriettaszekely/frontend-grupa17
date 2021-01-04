// 7. Condition rendering
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
  render() {
    const showPost1 = true;

    const post2 = (<Post title="Post 2" content="Continut 2" />);
    const post3 = (<Post title="Post 3" content="Continut 3" />);

    const showPost2 = false;
    return (
      <div>
        {showPost1 ? (<Post title="Post 1" content="Continut 1" />) : null}
        {showPost2 ? post2 : post3}
        <Post title="Invat React" content="Continut 4" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))







