import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Game from './rock-paper-game/Game'
// 1. Props vs State 
// 1. Props se trimite de la parinte - cine foloseste componenta da valori la props
// 2. Props sunt la fel ca parametri unei functii
// 3. Prin state facem componenta interactiva


function Post(args) { // function component
  return (<div>
    <h1>{args.title}</h1>
  </div>)
}

function MyButton() {
  const style = { backgroundColor: 'red' };
  return (<button style={style}>My Btn</button>)

  // return (<button style={{ backgroundColor: 'red' }}>My Btn</button>)
}


class PostList extends React.Component { // class component
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
    setTimeout(() => {
      const posts = this.state.posts.slice(1); // stergem primul post

      this.setState({ posts: posts })
    }, 2000)
  }

  render() {
    return (<div>
      {this.state.posts.map(postData => (<Post title={postData.title} />))}
    </div>)
  }
}


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <PostList />
            <MyButton />
          </Route>
          <Route path="/home">
            <div>Sunt pe home page</div>
          </Route>
          <Route path="/about">
            <div>Sunt pe about page</div>
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
// switch(){
//   case '/': return 1
//   case '/user': return 2
// }
export default App;
