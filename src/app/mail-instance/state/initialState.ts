export interface MailContent {
    inbox: Array<MailContentItem>;
    outbox: Array<MailContentItem>;
    sent: Array<MailContentItem>;
    draft: Array<MailContentItem>;
}

export interface MailContentItem {
    sender: String;
    content: String;
}

export const MailItemsState: MailContent = {
    inbox: [],
    outbox: [],
    sent: [],
    draft: []
};
