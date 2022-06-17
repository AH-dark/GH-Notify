import Repository from "../repository";
import Sender from "../sender";
import Organization from "../organization";
import Commit from "../commit";
import User from "../user";

export default interface Push {
    ref: string;
    before: string;
    after: string;
    created: boolean;
    deleted: boolean;
    forced: boolean;
    base_ref: null;
    compare: string;
    commits: Commit[];
    head_commit: Commit;
    repository: Repository;
    organization?: Organization;
    pusher: User;
    sender: Sender;
}
