// document.write('Hello world')

// versiune DOM
// let helloWorld = document.createElement('p');
// helloWorld.innerHTML = "Hello <strong>World</strong>";

// document.body.appendChild(helloWorld);


// versiune React
let helloWorldReact = React.createElement('p', null, "Hello world");

ReactDOM.render(helloWorldReact, document.getElementById('app'));




