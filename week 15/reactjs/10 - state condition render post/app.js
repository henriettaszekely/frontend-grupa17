// 10. Render condition post
// Lista de posturi si daca dam click pe unul sa schimbam background-ul
class Post extends React.PureComponent {
  render() {
    console.log('Post.render call');
    return (
      <div
        style={{ backgroundColor: this.props.backgroundColor }}
        onClick={this.props.onPostClick}
      >
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          title: 'Invat React',
          content: 'Continut 4',
          active: false,
        },
        {
          title: 'Post 5',
          content: 'Continut 5',
          active: false,
        },
        {
          title: 'Post 6',
          content: 'Continut 6',
          active: false,
        }
      ]
    }

  }

  onPostClick(postIndex) {
    console.log('post index =', postIndex);
    // pe ce post sa da click
    // afisam postul pe care sa dat click
    const newPosts = [...this.state.posts];
    const post = newPosts[postIndex];
    // v1
    // if (post.active) {
    //   post.active = false;
    // } else {
    //   post.active = true;
    // }
    // v2
    post.active = !post.active;


    this.setState({ posts: newPosts });


  }

  render() {
    return (
      <div>
        {this.state.posts
          .map((postData, index) => (
            <Post
              key={index}
              backgroundColor={postData.active ? 'red' : 'white'}
              title={postData.title}
              content={postData.content}
              onPostClick={() => this.onPostClick(index)}
            // onPostClick={this.onPostClick(index) /* => undefined */ }
            />
          ))
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))







