import Handler from "./model/handler";
import WxWorkBot from "./sender/wxWorkBot";
import Sender from "./model/sender";
import PingHandler from "./controller/pingHandler";

const main: Handler = async (event, context) => {
    // GitHub Event Name
    const ghEventName = event.headers["x-github-event"];
    const senderName = event.queryString.sender;

    // Check
    if (
        typeof ghEventName === "undefined" || // Event 名称
        typeof senderName === "undefined" || // Sender 名称
        typeof event.headers["x-github-delivery"] === "undefined" // 唯一标识符
    ) {
        return {
            isBase64Encoded: false,
            statusCode: 400,
            headers: {
                "Content-Type": "text/plain",
            },
            body: "not a github webhook request.",
        };
    }

    let sender: Sender | null = null;
    switch (senderName) {
        case "wxworkbot":
            const key = event.queryString["key"];
            if (typeof key === "undefined") {
                return {
                    isBase64Encoded: false,
                    statusCode: 400,
                    headers: {
                        "Content-Type": "text/plain",
                    },
                    body: "key not found.",
                };
            }

            sender = new WxWorkBot({ key: key });
            break;
        default:
            return {
                isBase64Encoded: false,
                statusCode: 400,
                headers: {
                    "Content-Type": "text/plain",
                },
                body: "unsupported sender.",
            };
    }

    switch (ghEventName) {
        case "ping":
            await PingHandler(event, sender);
            break;
        default:
            return {
                isBase64Encoded: false,
                statusCode: 400,
                headers: {
                    "Content-Type": "text/plain",
                },
                body: "unsupported event.",
            };
    }

    return {
        isBase64Encoded: false,
        statusCode: 200,
        headers: {
            "Content-Type": "text/plain",
        },
        body: "success.",
    };
};

export default main;
