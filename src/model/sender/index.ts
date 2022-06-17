export default interface Sender {
    sendTextMessage(msg: string): Promise<boolean>;
    sendMarkdownMessage(msg: string[]): Promise<boolean>;
}
