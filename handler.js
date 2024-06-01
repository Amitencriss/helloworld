exports.lambda_handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello, World Amit!'),
    };
    return response;
};
