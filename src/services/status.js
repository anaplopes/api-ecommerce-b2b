const { name, version } = require('../../package.json');
const started = require('../../server');

console.log(started.startedDate)

module.exports = () => {
    const uptime = (new Date().getTime() - startedDate.getTime()) / 1000;
    const status = {
        name: name,
        version: version,
        started: startedDate,
        uptime: uptime
    };
  
    status.getStatus = (req, res) => res.status(200).json(status);
    return status;
}
