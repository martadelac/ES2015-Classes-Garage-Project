// Part One
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
  }
  honk() {
    return "Beep";
  }
}
// Part Two

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

// Part Three
class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM!!!";
  }
}

// Part Four
class Garage {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }
  add(newCar) {
    if (!(newCar instanceof Vehicle)) {
    return 'Only vehicles are allowed in here!'
    }
    if (this.vehicles.lenght >= this.capacity) {
      return 'Sorry, we are full!'
    }
    this.vehicles.push(newCar);
    return 'Vehicle added!'

    
    
}
}
