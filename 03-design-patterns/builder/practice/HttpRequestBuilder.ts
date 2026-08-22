import { HttpRequest } from "./HttpRequest";

export class HttpRequestBuilder {
    private method: string = '';
    private url: string = '';
    private headers: Record<string, string> = {};
    private body: string = '';

    setMethod(method: string): HttpRequestBuilder {
        this.method = method;
        return this;
    }

    setUrl(url: string): HttpRequestBuilder {
        this.url = url;
        return this;
    }
    
    setHeaders(headers: Record<string, string>): HttpRequestBuilder {
        this.headers = headers;
        return this;
    }

    setBody(body: string): HttpRequestBuilder {
        this.body = body;
        return this;
    }

    build(): HttpRequest {
        if (!this.method || !this.url) {
            throw new Error("Method and url are required");
        }
        return new HttpRequest(this.method, this.url, this.headers, this.body);
    }
}