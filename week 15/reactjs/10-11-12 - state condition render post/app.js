// 10. Render condition post
// Lista de posturi si daca dam click pe unul sa schimbam background-ul
// 11. State vs Props
// 1. Props se trimite de la parinte - cine foloseste componenta da valori la props
// 2. Props sunt la fel ca parametri unei functii
// 3. Prin state facem componenta interactiva
// 12. React Development tool

// v2
// State vs Props
// Props = parametru trimisi la o functie . 
// State = variabila dintr-o functie
class Post extends React.PureComponent {
  render() {
    console.log('Post.render call');
    return (
      <div
        style={{ backgroundColor: this.props.backgroundColor }}
      // onClick={this.props.onPostClick}
      >
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        <button onClick={this.props.onPostDelete}>Delete</button>
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
              backgroundColor={postData.active ? 'red' : 'white'}
              title={postData.title}
              content={postData.content}
              onPostClick={() => this.onPostClick(index)}
              onPostDelete={() => this.onPostDelete(index)}
            // onPostClick={this.onPostClick(index) /* => undefined */ }
            />
          ))
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))







