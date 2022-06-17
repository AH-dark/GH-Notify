export default interface Response {
    isBase64Encoded: boolean;
    statusCode: number;
    headers: Record<string, string>;
    body: string;
}
