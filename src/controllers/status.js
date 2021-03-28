const service = require('../services/status')();


module.exports = app => {
    app.route('/api')
      .get(service.getStatus);
}
