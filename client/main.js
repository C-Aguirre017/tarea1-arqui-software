import angular from 'angular';
import angularMeteor from 'angular-meteor';

import requestTemplate from '../imports/components/request/request';

angular.module('tarea1-arqui-software', [
  angularMeteor,
  requestTemplate.name
]);
