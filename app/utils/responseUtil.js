function apiResponse(res, status, message, data, httpStatusCode) {
    return res.status(httpStatusCode).json({
        status: status,
        message: message,
        data: data
    });
}

module.exports = {
    success: (res, message, data) => apiResponse(res, 'success', message, data, 200),
    created: (res, message, data) => apiResponse(res, 'success', message, data, 201),
    error: (res, message, data) => apiResponse(res, 'error', message, data, 500)
};
