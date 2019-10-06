class Car {
  constructor({
 speed = 0, price, maxSpeed, isOn = false, distance = 0 
}) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`,
    );
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    const resultSpeed = this.speed + value;
    if (resultSpeed <= this.maxSpeed) {
      this.speed = resultSpeed;
    }
    return this.speed;
  }

  decelerate(value) {
    const resultSpeed = this.speed - value;
    if (resultSpeed > 0) {
      this.speed = resultSpeed;
    }
    return this.speed;
  }

  drive(hours) {
    if (this.isOn === true) {
      const result = hours * this.speed + this.distance;
      this.distance = result;
    }
    return this.distance;
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 120, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
