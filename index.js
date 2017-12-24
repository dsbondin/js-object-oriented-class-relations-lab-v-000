const store = {drivers: [], passengers: [], trips: []};

let driverId = 1;
let passengerId = 1;
let tripId = 1;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = driverId++;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => trip.driverId === this.id)
  }

  passengers() {
    let passengers = []
    this.trips().forEach(function(trip) {
      passengers.push(trip.passenger());
    });
    return passengers;
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = passengerId++;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => trip.passengerId === this.id);
  }

  drivers() {
    let drivers = [];
    this.trips().forEach(function(trip) {
      drivers.push(trip.driver());
    });
    return drivers;
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = tripId++;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  passenger() {
    return store.passengers.find(passenger => passenger.id === this.passengerId);
  }

  driver() {
    return store.drivers.find(driver => driver.id === this.driverId);
  }

}
