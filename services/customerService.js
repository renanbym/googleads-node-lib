var
  _ = require('lodash'),
  async = require('async'),
  soap = require('soap');

var AdWordsService = require('./adWordsService');

function Service(options) {
  var self = this;
  var Selector = require('../types/selector').model;
  AdWordsService.call(self, options);

  self.parseGetResponse = function(response) {

    return response.rval;
  };

  self.selectable = ['customerId'];

  self.xmlns = 'https://adwords.google.com/api/adwords/mcm/' + self.version;
  self.wsdlUrl = self.xmlns + '/CustomerService?wsdl';
}

Service.prototype = _.create(AdWordsService.prototype, {
  'constructor': Service
});

module.exports = (Service);
