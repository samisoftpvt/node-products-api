const Employee=require('../models/Employee');
const responseUtil=require('../utils/responseUtil');

exports.index = (req, res) => {
    Employee.findAll((error, employees) => {
        if (error) {
            responseUtil.error(res, error.message, null);
        } else {
            responseUtil.success(res, 'Employees retrieved successfully', employees);
        }
    });
};


exports.store = (req, res) => {
    Employee.create(req.body, (error, employeeId) => {
        if (error) {
            responseUtil.error(res, error.message, null);
        } else {
            responseUtil.created(res, `Employee created with ID: ${employeeId}`, { employeeId });
        }
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Employee.update(id, req.body, (error, result) => {
        if (error) {
            responseUtil.error(res, error.message, null);
        } else {
            responseUtil.success(res, `Employee with ID ${id} updated.`, { id });
        }
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Employee.delete(id, (error, result) => {
        if (error) {
            responseUtil.error(res, error.message, null);
        } else {
            responseUtil.success(res, `Employee with ID ${id} deleted.`, { id });
        }
    });
};

