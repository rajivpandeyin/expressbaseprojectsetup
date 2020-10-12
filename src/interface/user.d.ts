declare interface IUserLogin {
    email: string;
    password: string;
}

declare interface IUser {
    adminData: any;
    tokenInfo?: any;
}