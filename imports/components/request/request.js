import angular from 'angular';
import angularMeteor from 'angular-meteor';
import requestTemplate from './request.html';
import { RequestModel } from '../../api/requests.js';

const SHOW_NUMBER = 10;

class RequestCtrl {
  constructor($scope) {
      $scope.viewModel(this);

      this.subscribe('requests');

      this.helpers({
        requests() {
          let aux = RequestModel.find({},{sort: {created_at: -1}, limit: SHOW_NUMBER});
          this.numRequests = aux.count();
          return aux;
        },
        count(){
          return RequestModel.find({}).count();
        }
      })
    }
}

export default angular.module('request', [
  angularMeteor
])
  .component('request', {
    templateUrl: requestTemplate,
    controller: ['$scope', RequestCtrl]
  });
