export function buildResponse(success, code, message, data, error) {
    return {
        success: success,
        code: code,
        message: message,
        data: data,
        error: error,
    };
}
