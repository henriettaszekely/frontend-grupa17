// 3. Post - JSX


// versiune React fara jsx
// let postH2 = React.createElement('h2', null, "Post 1 React");
// let postP = React.createElement('p', null, "Continut post 1");

// let post = React.createElement('div', null, postH2, postP);

// ReactDOM.render(post, document.getElementById('app'));


// versiune cu jsx

let Post = (
  <div>
    <h2>Post 1 JSX</h2>
    <p>Continut 1</p>
  </div>
);
// se converteste in codul de mai jos
// let Post = React.createElement("div", null, 
//   React.createElement("h2", null, "Post 1"), 
//   React.createElement("p", null, "Continut 1")
// );

ReactDOM.render(Post, document.getElementById('app'))







