import angular from 'angular';
import angularMeteor from 'angular-meteor';
import requestTemplate from './request.html';
import { RequestModel } from '../../api/requests.js';

const SHOW_NUMBER = 10;

class RequestCtrl {
  constructor($scope) {
      $scope.viewModel(this);

      this.subscribe('requests');
      this.numRequests = SHOW_NUMBER;

      this.helpers({
        requests() {
          return RequestModel.find({},{sort: {created_at: -1}, limit: this.getReactively('numRequests')});
        },
        count(){
          return RequestModel.find({}).count();
        },
        reload(){
          console.log("OUCH");
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
