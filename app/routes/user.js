const userController = require('../controllers/user');
module.exports = function(router){

    router.post('/create',function(req,res){
        return userController.create(req,res);
    });
    router.post('/update/:id',function(req,res){
        return userController.update(req,res);
    });
    router.delete('/delete/:id',function(req,res){
        return userController.delete(req,res);
    });
    router.get('/list',function(req,res){
        return userController.list(req,res);
    });
    router.get('/view/:id',function(req,res){
        return userController.read(req,res);
    });

    return router;
}