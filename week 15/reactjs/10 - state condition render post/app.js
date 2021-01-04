// 8. State
// Sa adaugam un event de on click pe Post
// In DOM un div are "onclick". Ex: document.createElement('div').onclick = function(){}
class Post extends React.Component {
  render() {
    // document.addEventListener('scroll', function(){

    // })
    console.log(this); // this1
    return (
      <div onClick={() => {
        // this == this1
        this.props.onPostClick();
      }}>
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

class App extends React.Component {
  onPostClick() {
    console.log('post click');
  }

  render() {
    return (
      <div>
        <Post title="Invat React" content="Continut 4" onPostClick={this.onPostClick} />
        <Post title="Post 2" content="Continut 2" onPostClick={this.onPostClick} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))







