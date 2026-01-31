


export const http = (baseUrl: string) => ({
    get: (url: string) => fetch(baseUrl + url),
    post: (url: string, body: any) => fetch(baseUrl + url, {
        method: 'POST',
        body: JSON.stringify(body),
    }),
});