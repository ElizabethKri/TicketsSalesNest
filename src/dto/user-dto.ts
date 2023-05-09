import {IUser} from "../interfaces/user";

export class UserDto implements IUser {
    psw: string;
    cardNumber: string;
    login: string;
    email: string;
    id: string;
}