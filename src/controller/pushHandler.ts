import Sender from "../model/sender";
import Push from "../model/gh-hook/event/push";
import dayjs from "dayjs";

const PushHandler = async (data: Push, sender: Sender) => {
    let msg = [
        `**有新的 <font color="warning">${data.forced && "Force "}Push</font> 事件**`,
        `仓库: [${data.repository.name}](${data.repository.html_url})${data.repository.private && " (Private)"}`,
        `提交者：[${data.sender.login}](${data.sender.html_url})`,
    ];

    msg.push("");

    if (data.commits.length > 0) {
        data.commits.map((commit) => {
            msg.push(`> Commit ${commit.id.slice(0, 12)}`);
            commit.message.split("\n").map((message) => {
                msg.push(`> ${message}`);
            });
            msg.push("");
        });
    }

    msg.push(`Compare: [${data.head_commit.id.slice(0, 12)}](${data.compare})`);
    msg.push(`SHA: ${data.after}`);
    msg.push(`Date: ${dayjs().format("YYYY-MM-DD HH:mm:ss")}`);

    await sender.sendMarkdownMessage(msg);
};

export default PushHandler;
