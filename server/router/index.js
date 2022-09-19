const detail = require('./user');
function route(app) {
    app.use('/api/clinic/supplier', detail);
}

module.exports = route;
