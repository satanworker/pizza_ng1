import underscore from 'underscore';

class CreatePizzaController {
  constructor() {
    this.pizza = {
      size: null,
      name: null,
      topping: null
    };
    this.inputData = JSON.parse(this.comment);
    this.toppings = this.inputData.toppings;
    this.unfilled = false;
    this.error = '';
    this.pizzas = [];
  }
  choseTopping(topping, toppingID){
    this.pizza.topping = topping.name;
    this.toppings.map(item => {
      item['chosen'] = false;
    })
    topping['chosen'] = true;
  }
  removePizza($event, id) {
    $event.preventDefault();
    this.pizzas.splice(id, 1);
  }
  showError(error) {
    this.unfilled = true;
    this.error = error;
    setTimeout(() => {
      this.unfilled = false;
      this.error = '';
    }, 1000);
  }
  submit($event){
    $event.preventDefault();
    this.error = '';
    if(this.pizza.size) {
      if (this.pizza.size < 10) {
        this.showError('Too small!');
      }
      if (this.pizza.size > 100) {
        this.showError('Too BIG!');
      }
    } else this.showError('Some size, please');
    if (!this.pizza.name) {
      this.showError('Pizza must be named!');
    }
    if (!this.pizza.topping) {
      this.showError('Wait, no topping for pizza?!!');

    }
    if (!this.unfilled) {
      this.pizzas.push(this.pizza);
      this.pizza = {
        size: null,
        name: null,
        topping: null
      };
      this.toppings.map(item => {
        item['chosen'] = false;
      })
    }

  }
}

CreatePizzaController.$inject = []

module.exports = CreatePizzaController
