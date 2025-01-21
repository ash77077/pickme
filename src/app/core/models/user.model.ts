import { EUserRole } from '../enums/user-role.enum';

export interface IUser {
    readonly id: number;
    username: string;
    documentId: string;
    password: string;
    newPassword: string;
    group: string;
    role: EUserRole;
    phone: IPhone;
    email: string;
    language: string;
    first_name: string;
    last_name: string;
    clientName: string;
    token: string;
    ip: string;
    validTo: string;
    otp: string;
    posId: number;
    clientId: number;
    passwordExpired: boolean;
    bulkTopUpEnabled: boolean;
}

export interface IPhone {
    readonly id: number;
    countryCode: string;
    areaCode: string;
    number: string;
}

export interface INewPassword{
    readonly id: number;
    username: string;
    password: string;
    newPassword: string;
}

export class Phone implements IPhone {
    readonly id: number;
    countryCode: string;
    areaCode: string;
    number: string;

    constructor(params?: IPhone) {
        if (params) {
            this.id = params.id;
            this.countryCode = params.countryCode;
            this.areaCode = params.areaCode;
            this.number = params.number;
        }
    }
}

export class UserModel implements IUser {
    readonly id: number;
    username: string;
    documentId: string;
    password: string;
    newPassword: string;
    group: string;
    role: EUserRole;
    phone: IPhone;
    email: string;
    language: string;
    first_name: string;
    last_name: string;
    clientName: string;
    token: string;
    ip: string;
    validTo: string;
    otp: string;
    posId: number;
    clientId: number;
    passwordExpired: boolean;
    bulkTopUpEnabled: boolean;

    constructor(params: IUser) {
        if (params) {
            this.id = params?.id;
            this.username = params?.username || '';
            this.documentId = params?.documentId || '';
            this.newPassword = params?.newPassword || '';
            this.password = params?.password || '';
            this.group = params?.group || '';
            this.role = params?.role || EUserRole.USER;
            this.email = params?.email || '';
            this.language = params?.language || '';
            this.ip = params?.ip || '';
            this.validTo = params?.validTo || '';
            this.otp = params?.otp || '';
            this.first_name = params?.first_name || '';
            this.last_name = params?.last_name || '';
            this.clientName = params?.clientName || '';
            this.posId = params?.posId || null;
            this.clientId = params?.clientId || null;
            this.phone = new Phone(params?.phone);
            this.passwordExpired = params?.passwordExpired || false;
            this.bulkTopUpEnabled = params?.bulkTopUpEnabled || false;
        }
        if (params?.token) {
            this.token = params?.token || '';
            sessionStorage.setItem('access-token', JSON.stringify(params?.token));
        }
    }

    public get isAdmin(): boolean {
        return this.role === EUserRole.ADMIN;
    }
}

export interface IBalance {
    total: number;
    credit: number;
    balanceAmount: number;
}

export interface IAdminBalance {
    providerId: number;
    providerName: string;
    balance: number;
}
