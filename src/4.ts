class Key {
  private signature: number = Math.random();
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  tenants: Person[] = [];
  door: boolean = false;

  constructor(public key: Key) {}

  comeIn(key: Person): void {
    if (this.door) {
      this.tenants.push(key);
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Двері відкрито");
    } else {
      console.log("Невірний ключ!");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);

export {};
