const notifier = require('./src/notifier');
module.exports = function (Sequelize) {

    Sequelize.Model.prototype.notify = function (options){
        //check if it has been instantiated

       return  notifier(this,options)
    }

};
