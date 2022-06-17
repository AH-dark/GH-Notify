import Repository from "./repository";
import Sender from "./sender";

export default interface PingData {
    zen: string;
    hook_id: number;
    hook: Hook;
    repository: Repository;
    sender: Sender;
}

export interface Hook {
    type: string;
    id: number;
    name: string;
    active: boolean;
    events: string[];
    config: Config;
    updated_at: Date;
    created_at: Date;
    url: string;
    test_url: string;
    ping_url: string;
    last_response: LastResponse;
}

export interface Config {
    content_type: string;
    url: string;
    insecure_ssl: string;
}

export interface LastResponse {
    code: null;
    status: string;
    message: null;
}
