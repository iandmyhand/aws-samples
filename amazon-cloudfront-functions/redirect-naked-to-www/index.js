function handler(event) {
    var request = event.request;
    var host = request.headers.host.value;

    if (host === 'example.com') {
        // You can use 302 status. If you want to use 302 status, replace the value of statusDescription with 'Found'.
        var response = {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers:
                { "location": { "value": 'https://www.example.com' + event.request.uri } }
            }
        return response;
    }
    return request;
}
