const service = require('../services/customer')();


module.exports = app => {
  app.route('/api/customer')
    .get(service.listCustomer);
}
