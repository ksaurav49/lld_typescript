import { HttpRequestBuilder } from "./HttpRequestBuilder";


const httpsRequest = new HttpRequestBuilder()
    .setMethod('GET')
    .setUrl('https://www.google.com')
    .setHeaders({ 'Content-Type': 'application/json' })
    .build();
httpsRequest.send();

const httpsPostRequest = new HttpRequestBuilder()
    .setMethod('POST')
    .setUrl('https://api.example.com/posts')
    .setHeaders({ 'Content-Type': 'application/json' })
    .setBody(JSON.stringify({
        title: 'Test Post',
        content: 'This is a test post'
    }))
    .build();
httpsPostRequest.send();