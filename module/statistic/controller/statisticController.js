var util = require('util');
var BaseController = require('../../application/controller/baseController');
var Statistic = require('../model/statisticModel');

function StatisticController() {
}

util.inherits(StatisticController, BaseController);

StatisticController.prototype.getList = function(req, res) {
    res.send('statistic getList action');
};

StatisticController.prototype.testAction = function(req, res) {
    res.send('test action');
};

StatisticController.prototype.get = function(id, req, res) {
    Statistic.findById(id, function(err, statistic) {
        if (err) {
            res.send(err);
        }
        res.json(statistic);
    });
};

module.exports = StatisticController;