function BaseConfig(app) {
    this.app = app;
    this.moduleName = 'application';
    var BaseController = require('../controller/baseController');
    this.controller = new BaseController();
}

BaseConfig.prototype.init = function () {
    var config = this;
//    var reg = new RegExp('^[0-9]+$');
    var reg = new RegExp('^[0-9a-f]{24}$');

    this.express = require('express');
    this.router = this.express.Router();

    // default REST routing /module/controller
    this.router.route('/' + this.moduleName.toString().toLowerCase() + '/' + this.controller.constructor.name.toString().toLowerCase().replace('controller', ''))
            .get(function (req, res) {
                config.controller.getList(req, res);
            })
            .post(function (req, res) {
                config.controller.create(req, res);
            });
    this.router.route('/' + this.moduleName.toString().toLowerCase() + '/' + this.controller.constructor.name.toString().toLowerCase().replace('controller', '') + '/:id')
            .get(function (req, res, next) {
                if (reg.test(req.params.id)) {
                    config.controller.get(req.params.id, req, res);
                } else if (typeof (config.controller[req.params.id + 'Action']) === 'function') {
                    config.controller[req.params.id + 'Action'](req, res);
                } else {
                    next();
                }
            })
            .put(function (req, res) {
                if (reg.test(req.params.id)) {
                    config.controller.update(req.params.id, req, res);
                } else {
                    next();
                }
            })
            .delete(function (req, res) {
                if (reg.test(req.params.id)) {
                    config.controller.delete(req.params.id, req, res);
                } else {
                    next();
                }
            });
    // apply the routes to our application
    this.app.use('/', this.router);
};

module.exports = BaseConfig;