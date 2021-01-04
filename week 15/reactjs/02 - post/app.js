// 2. Post - title and content ( ReactJs vs DOM)
/*
<div>
  <h2>Post 1</h2>
  <p>Continut post</p>
</div>
*/
// versiune DOM

// let post = document.createElement('div');

// let postP = document.createElement('p');
// postP.innerText = "Continut post";

// let postH2 = document.createElement('h2');
// postH2.innerText = "Post 1";

// post.appendChild(postH2);
// post.appendChild(postP);


// document.body.appendChild(post);


// versiune React
let postH2 = React.createElement('h2', null, "Post 1 React");
let postP = React.createElement('p', null, "Continut post 1");

let post = React.createElement('div', null, postH2, postP);

ReactDOM.render(post, document.getElementById('app'));




