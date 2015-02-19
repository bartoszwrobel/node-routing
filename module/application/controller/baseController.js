function BaseController() {
}

BaseController.prototype.getList = function(req, res) {
    res.send('base getList action');
};
BaseController.prototype.get = function(id, req, res) {
    res.send('base get action witd id = ' + id);
};
BaseController.prototype.create = function(req, res) {
    res.send('base post action');
};
BaseController.prototype.update = function(id, req, res) {
    res.send('base put action');
};
BaseController.prototype.delete = function(id, req, res) {
    res.send('base delete action');
};

module.exports = BaseController;