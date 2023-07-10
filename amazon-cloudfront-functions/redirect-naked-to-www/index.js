function handler(event) {
    var request = event.request;
    if (request.headers.host) {
        if (request.headers.host.value) {
            var host = request.headers.host.value;
        
            if (host === 'example.com') {                
                var response = {
                    statusCode: 301, // When using 301 status, the value of statusDescription is 'Moved Permanently', and 302 is 'Found'.
                    statusDescription: 'Moved Permanently',
                    headers:
                        { 
                            "location": { "value": 'https://www.example.com' + event.request.uri },
                            "x-robots-tag": { "value": "noindex" }  // Avoid google's 'Page with redirect' error.
                        }
                    }
                return response;
            }
        }
    }
    return request;
}
