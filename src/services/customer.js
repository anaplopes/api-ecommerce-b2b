const customerDB = require('../data/customer.json');


module.exports = () => {
  const customer = {};
  customer.listCustomer = (req, res) => res.status(200).json(customerDB);
  return customer;
}
