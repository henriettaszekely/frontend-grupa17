var postsBaseUrl = "https://jsonplaceholder.typicode.com";

function diplayPost(post) {
  // get the post list
  var postList = document.getElementById("postsList");

  // create a list item
  var item = document.createElement("li");

  // add the post id, title and body
  item.innerHTML = post.id + " - " + post.title + ": " + post.body;

  item.style.marginBottom = '20px';

  // append the list item to the list
  postList.appendChild(item);
}

function diplayGame(post) {
  // get the post list
  var postList = document.getElementById("postsList");

  // create a list item
  var item = document.createElement("li");

  // add the post id, title and body
  item.innerHTML = post._id + " - " + post.title + ": " + '<p>' + post.description + '</p>';

  item.style.marginBottom = '20px';

  // append the list item to the list
  postList.appendChild(item);
}

// fetch only one post by id
fetch(postsBaseUrl + "/posts/102", { method: "GET" })
  .then(
    function (response) {
      // see how the Response object looks like
      console.log(response);

      // based on the Resonse status decide what to do
      if (response.status === 200) {
        return response.json();
        // It returns a promise that resolves with the result of parsing the body text as JSON.
        // The json() method takes a Response stream and reads it to completion.
      } else if (response.status === 404) {
        throw new Error("Post not found!");
      }
    }
  )
  .then(
    function (jsonResp) {
      console.log(jsonResp);
      // call the display function
      diplayPost(jsonResp);
    }
  ).catch(function (jsonResp) {
    console.log(jsonResp);
  });

var gamesBaseUrl = "https://games-world.herokuapp.com";

// fetch all games
fetch(gamesBaseUrl + "/games", { method: "GET" })
  .then(
    function (response) {
      // parsing the response
      return response.json();
    }
  ).then(
    function (jsonResp) {
      // for(var i=0; i< jsonResp.length; i++) {
      //   diplayPost(jsonResp[i]);
      //};

      // more details about forEach - https://www.w3schools.com/jsref/jsref_foreach.asp
      jsonResp.forEach(function (element) {
        // call the displayGame function for each element
        diplayGame(element);
      });
    }
  )


// add a new post
fetch(postsBaseUrl + '/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
  })
}).then(
  function (response) {
    return response.json();
  }).then(
    function (jsonResp) {
      console.log(jsonResp);
    });
