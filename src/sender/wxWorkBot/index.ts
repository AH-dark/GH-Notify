import Sender from "../../model/sender";
import axios from "axios";

interface ConstructorData {
    key: string;
}

export default class WxWorkBot implements Sender {
    private readonly key: string | null = null;

    constructor(data: ConstructorData) {
        this.key = data.key;
        this.axios.defaults.params.key = data.key;
    }

    private axios = axios.create({
        baseURL: "https://qyapi.weixin.qq.com/cgi-bin/webhook/",
        headers: {
            "Content-Type": "application/json",
        },
        responseType: "json",
        responseEncoding: "utf8",
        params: {
            key: null,
        },
    });

    async sendTextMessage(msg: string) {
        const res = await this.axios.post("/send", {
            msgtype: "text",
            text: {
                content: msg,
                mentioned_list: [],
                mentioned_mobile_list: [],
            },
        });

        if (res.status === 200 && res.data.errcode && res.data.errcode === 0) {
            return true;
        } else {
            console.error("[Sender]", "Error in WxWorkBot Sender:", res);
            return false;
        }
    }

    async sendMarkdownMessage(msg: string[]) {
        const res = await this.axios.post("/send", {
            msgtype: "markdown",
            markdown: {
                content: msg.join("\n"),
            },
        });

        if (res.status === 200 && res.data.errcode && res.data.errcode === 0) {
            return true;
        } else {
            console.error("[Sender]", "Error in WxWorkBot Sender:", res);
            return false;
        }
    }
}
