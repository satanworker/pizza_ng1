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
    this.pizzas = [];
  }
  choseTopping(topping, toppingID){
    this.pizza.topping = topping.name;
    this.toppings.map(item => {
      item['chosen'] = false;
    })
    topping['chosen'] = true;
    console.log(this.pizza)
  }
  removePizza($event, id) {
    console.log('removePizza', id);
    $event.preventDefault();
    this.pizzas.splice(id, 1);
  }
  submit($event){
    $event.preventDefault();
    let unfilled = false;
    let error = '';
    if(this.pizza.size) {
      if(this.pizza.size < 10) {
        error = 'Too small!';
        unfilled = true;
      }
      if(this.pizza.size > 100)
      {
        error = 'Too BIG!';
        unfilled = true;
      }
    } else unfilled = true;
    if(!this.pizza.name) {
      unfilled = true;
      error = "There aint no unnamed pizza in this world"
    }
    if(!this.pizza.topping) {
      unfilled = true;
      error = "Wait, no topping for pizza?!";
    }
    if (unfilled) {
      alert(error);
    } else {
      console.log('Submit Pizza', this.pizza);
      alert('Submitted your pizza!');
      this.pizzas.push(this.pizza);
      this.pizza = {
        size: null,
        name: null,
        topping: null
      };
    }


  }
}

CreatePizzaController.$inject = []

module.exports = CreatePizzaController
