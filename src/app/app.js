import angular from 'angular'
require('./styles/materialize/materialize.css');
import home from './pages/home/home'
import styles from './styles/main.scss'


angular
  .module('app', [
    'app.components',
    'app.home'
  ])
  .config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home')
  });

