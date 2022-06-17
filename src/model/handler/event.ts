import { Method } from "axios";

export default interface Event {
    requestContext: RequestContext;
    headers: Record<string, string | undefined>;
    body: string;
    pathParameters: Record<string, string | undefined>;
    queryStringParameters: Record<string, string | undefined>;
    headerParameters: Record<string, string | undefined>;
    stageVariables: StageVariables;
    path: string;
    queryString: Record<string, string | undefined>;
    httpMethod: Method;
}

export interface RequestContext {
    serviceId: string;
    path: string;
    httpMethod: string;
    requestId: string;
    identity: Record<string, string | undefined>;
    sourceIp: string;
    stage: string;
}

export interface StageVariables {
    stage: string;
}
