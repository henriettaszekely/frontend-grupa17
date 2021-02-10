class Car {
  start = () => {
    // this -- va fi tot timpul contextul obiectului car
  }
}

const car = new Car();

btn.addEventListener('click', car.start)