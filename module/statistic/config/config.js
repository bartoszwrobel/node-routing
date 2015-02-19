var util = require('util');
var BaseConfig = require('../../application/config/baseConfig');
var StatisticController = require('../controller/statisticController');

function StatisticConfig(app) {
    BaseConfig.apply(this, arguments);
    this.moduleName = 'statistic';
    this.controller = new StatisticController();
}
util.inherits(StatisticConfig, BaseConfig);

module.exports = StatisticConfig;