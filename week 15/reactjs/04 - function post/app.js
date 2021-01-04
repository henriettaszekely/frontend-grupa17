// 4. Post 
function Post(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  )
}

// Atributele se trimit intr-un obiect props la functia de la sus
let App = (
  <div>
    <Post title="Post 1" content="Continut 1" />
    <Post title="Post 2" content="Continut 2" />
    <Post title="Post 3" content="Continut 3" />
    <Post title="Invat React" content="Continut 4" />
  </div>
);



ReactDOM.render(App, document.getElementById('app'))







