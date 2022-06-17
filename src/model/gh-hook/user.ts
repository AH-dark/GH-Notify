export default interface User {
    name: string;
    email: string;
}

export interface Author extends User {
    username: string;
}
