import Event from "../model/handler/event";
import PingData from "../model/gh-hook/ping";
import Sender from "../model/sender";

const PingHandler = async (event: Event, sender: Sender) => {
    const data: PingData = JSON.parse(event.body);
    await sender.sendMarkdownMessage(
        `接收到 Ping 消息：\`${data.zen}\`，WebHook 接收消息测试成功。`
    );
};

export default PingHandler;
