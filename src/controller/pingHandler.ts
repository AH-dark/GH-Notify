import Ping from "../model/gh-hook/event/ping";
import Sender from "../model/sender";

const PingHandler = async (data: Ping, sender: Sender) => {
    await sender.sendMarkdownMessage([`接收到 Ping 消息：\`${data.zen}\``, "WebHook 接收消息测试成功。"]);
};

export default PingHandler;
