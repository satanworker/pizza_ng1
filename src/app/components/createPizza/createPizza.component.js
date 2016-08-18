import components from '../components'
import CreatePizzaController from './createPizza.controller'
import CreatePizzaTemplate from './createPizza.template.html'
components
  .component('createPizza', {
    bindings: {
      comment: '@'
    },
    controller: CreatePizzaController,
    template: CreatePizzaTemplate
  })
