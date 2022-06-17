import { Author } from "./user";

export default interface Commit {
    id: string;
    tree_id: string;
    distinct: boolean;
    message: string;
    timestamp: Date;
    url: string;
    author: Author;
    committer: Author;
    added: string[];
    removed: string[];
    modified: string[];
}
