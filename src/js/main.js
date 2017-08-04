import angular from 'angular';

import { routerConfig } from './routes';
import { ImagesController } from './controllers/images';
import 'angular-ui-router';

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('ImagesController', ImagesController)
