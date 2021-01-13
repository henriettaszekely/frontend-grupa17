const user = { name: 'Razvan' }


export function sum(array) {

  show(user)
  return array.reduce((acc, el) => acc + el, 0)
}

function show(msg) {
  console.log(msg);
}


class Game {
  show() {

  }
}
