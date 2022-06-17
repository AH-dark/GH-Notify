import Event from "./event";
import Context from "./context";
import Response from "./response";

export { default as FunctionResponse } from "./response";

export default interface Handler {
    (event: Readonly<Event>, context: Readonly<Context>): Promise<
        Readonly<Response>
    >;
}
