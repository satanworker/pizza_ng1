import angular from 'angular'

import home from './pages/home/home'
import styles from './styles/main.scss'
// import * as $ from '../../public/assets/jquery/jquery'
// import * as materialize from '../../public/assets/materialize/js/materialize'

angular
  .module('app', [
    'app.components',
    'app.home'
  ])
  .config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home')
  })

