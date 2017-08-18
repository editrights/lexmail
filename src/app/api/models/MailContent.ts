export interface MailContent {
    internalName: string;
    displayName: string;
    type: string;
    newMails: number;
    inbox: Array<any>;
    outbox: Array<any>;
    sent: Array<any>;
}