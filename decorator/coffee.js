// Problem: Design system to handle types of coffee orders; factors are toppings (milk, sugar, cream), and sizes (s, m , l)
/* Requirements:
    Define a base Coffee class with a method cost() that returns the cost of the basic coffee.
    Implement concrete coffee classes (e.g., SimpleCoffee) that extend the base Coffee class and provide their own implementation of the cost() method.
    Create decorator classes for add-ons (e.g., MilkDecorator, SugarDecorator, WhippedCreamDecorator) that also extend the base Coffee class. These decorators should have a constructor that takes a Coffee instance as a parameter and overrides the cost() method to include the cost of the add-on.
    Create decorator classes for different sizes (e.g., SmallSizeDecorator, MediumSizeDecorator, LargeSizeDecorator) that adjust the cost of the coffee based on its size.
    Allow the decorators to be stacked in any order, allowing customers to customize their coffee orders with various add-ons and sizes.

*/

// base class for coffee with method cost()
class Coffee {
  cost() {
    return 1; // basic cost
  }
}

// concrete classs which extend base class + provide own implemenation for cost()
class SimpleCoffee extends Coffee {}

// decorator class for add-on 'milk'; extends base class 'Coffee'
class MilkAddOn extends Coffee {
  constructor(coffee) {
    super();
    this._coffee = coffee;
  }

  cost() {
    return this._coffee.cost() + 0.5; // additional cost for milk
  }
}

// decorator class for add-on 'cream'; extends base class 'Coffee'
class CreamAddOn extends Coffee {
  constructor(coffee) {
    super();
    this._coffee = coffee;
  }

  cost() {
    return this._coffee.cost() + 0.25;
  }
}

// decorator class for size 'small'
class SmallAddOn extends Coffee {
  constructor(coffee) {
    super();
    this._coffee = coffee;
  }
  cost() {
    // adjust cost of the coffee based on small size; existing cost + cost of small size

    return this._coffee.cost() - 0.25;
  }
}

// decorator class for size 'Large'
class LargeAddOn extends Coffee {
  constructor(coffee) {
    super();
    this._coffee = coffee;
  }

  cost() {
    return this._coffee.cost() + 2;
  }
}

let myCoffee = new SimpleCoffee();

myCoffee = new MilkAddOn(myCoffee);
myCoffee = new CreamAddOn(myCoffee);
myCoffee = new LargeAddOn(myCoffee);

console.log("Total cost: ", myCoffee.cost());
