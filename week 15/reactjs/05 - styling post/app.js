// 5. Styling post 
function Post(props) {
  const styleH2 = {
    backgroundColor: 'white', // background-color
    fontSize: '16px',
  }

  if (props.title == 'Post 1') {
    styleH2.color = "red";
  }

  return (
    <div className="post">
      <h2 style={styleH2}>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  )
}

// Atributele se trimit intr-un obiect props la functia de la sus
let title1 = "Post 1";
let App = (
  <div>
    <Post title={title1} content="Continut 1" />
    <Post title="Post 2" content="Continut 2" />
    <Post title="Post 3" content="Continut 3" />
    <Post title="Invat React" content="Continut 4" />
  </div>
);



ReactDOM.render(App, document.getElementById('app'))







