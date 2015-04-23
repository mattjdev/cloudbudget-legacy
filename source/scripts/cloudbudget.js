window._ = require('lodash');
require('angular');
require('angular-route');
require('angular-ui-bootstrap-bower');
require('restangular');
require('matchmedia-ng');
window.X2JS = require('x2js');
require('angular-xml');

if(!Array.prototype.find) {
  Array.prototype.find = function(callback) {
    var returnVal = undefined;
    if (callback && angular.isFunction(callback)) {
      this.some(function(x, i, a) {
        if (callback(x, i, a)) {
          returnVal = x;
          return true;
        }
        return false;
      });
    }
    return returnVal;
  }
}

angular.module('CloudBudget', ['ngRoute','restangular','ui.bootstrap','matchmedia-ng', 'xml']);

require('./cloudbudget.config.js');
require('./common');
require('./controllers');
