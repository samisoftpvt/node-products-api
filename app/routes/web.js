const EmployeeController=require('../controllers/EmployeeController');
const validateRequest=require('../middleware/validateRequest');
const employeeValidator=require('../validators/employeeValidator');

module.exports=function (app){
    app.get('/employees',EmployeeController.index);
    app.post('/employees',employeeValidator.createEmployeeValidator,validateRequest,EmployeeController.store);
    app.put('/employees/:id',employeeValidator.createEmployeeValidator,validateRequest,EmployeeController.update);
    app.delete('/employees/:id',EmployeeController.delete);
}