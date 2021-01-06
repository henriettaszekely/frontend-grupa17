// 13. Life cycle of components
function Post() {
  return (
    <div
      style={{ backgroundColor: this.props.backgroundColor }}
    >
      <h2>{this.props.title}</h2>
      <p>{this.props.content}</p>
      <button onClick={this.props.onPostDelete}>Delete</button>
    </div>
  )
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

  componentDidMount() {
    console.log('App: componenta sa afisat pe ecran')
    // requesturi catre server
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps=', prevProps)
    console.log('prevState=', prevState)

    if (prevState.posts.length !== this.state.posts.length) {
      console.log('se schimba post-urile');
    }
  }

  componentWillUnmount() {
    console.log('App: inaite ca componenta nostra sa dispara')
  }

  onPostDelete(postIndex) {
    console.log('delete post index = ', postIndex);
    const newPosts = [...this.state.posts];

    newPosts.splice(postIndex, 1);

    this.setState({ posts: newPosts });
  }

  render() {
    return (
      <div>
        {this.state.posts
          .map((postData, index) => (
            <Post
              key={index}
              title={postData.title}
              content={postData.content}
              onPostDelete={() => this.onPostDelete(index)}
            />
          ))
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))







