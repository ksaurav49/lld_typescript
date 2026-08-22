export class HttpRequest {
    private method: string;
    private url: string;
    private headers: Record<string, string>;
    private body: string;

    constructor(method: string, url: string, headers: Record<string, string>, body: string) {
        this.method = method;
        this.url = url;
        this.headers = headers;
        this.body = body;
    }

    send(): void {
        console.log(`Sending request to ${this.url} with method ${this.method}`);
        console.log(`Headers: ${JSON.stringify(this.headers)}`);
        console.log(`Body: ${this.body}`);
    }
}