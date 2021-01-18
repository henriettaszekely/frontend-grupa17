// 1. Create de promise
const promise1 = new Promise(function (resolve, reject) {

  try {
    const result = 1;
    resolve(result);
  } catch (error) {
    reject(error)
  }
});
// 2. Obtinem valoare din el ( ex. fetch('http://host:400/games') => Promise)
promise1
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error);
  });


// ES6
async function start() {
  try {
    const result = await promise1;
    const result2 = await fetch('http://localhost:3000/posts');

  } catch (error) {
    console.log(error);
  }
}
start();




