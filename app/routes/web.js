const EmployeeController=require('../controllers/EmployeeController');

module.exports=function (app){
    app.get('/employees',EmployeeController.index);
    app.post('/employees',EmployeeController.store);
    app.put('/employees/:id',EmployeeController.update);
    app.delete('/employees/:id',EmployeeController.delete);
}