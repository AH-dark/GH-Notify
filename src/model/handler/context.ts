export default interface Context {
    memory_limit_in_mb: number;
    time_limit_in_ms: number;
    request_id: string;
    environment: string;
    environ: string;
    function_version: string;
    function_name: string;
    namespace: string;
    tencentcloud_region: string;
    tencentcloud_appid: string;
    tencentcloud_uin: string;
}
