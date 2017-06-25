import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as endpoints from './endpoints';

@Injectable()
export class MailRegistryService {

    constructor(private http: Http) {
    }

    getRegisteredMails = (): Observable<any> => {
        const mailsData = this.mailsData.slice();
        return Observable.of(mailsData);
    }

    getMailContents = (): Observable<any> => {
        const mailsContent = this.mailsContent.slice();
        return Observable.of(mailsContent);
    }
    mailsContent = [

        {
            "internalName": "Test1",
            "displayName": "Test1@gmail.com",
            "type": "gmail",
            "inbox": [
                {
                    "sender": "inbox test1",
                    "content": "Lorem ipsum"
                },
                {
                    "sender": "inbox test2",
                    "content": "Lorem ipsum"
                },
                {
                    "sender": "inbox test3",
                    "content": "Lorem ipsum"
                }
            ],
            "outbox": [
                {
                    "sender": "outbox test1",
                    "content": "Lorem ipsum"
                },
                {
                    "sender": "outbox test2",
                    "content": "Lorem ipsum"
                },
                {
                    "sender": "outbox test3",
                    "content": "Lorem ipsum"
                }
            ],
            "sent": [
                {
                    "sender": "sent test1",
                    "content": "Lorem ipsum"
                },
                {
                    "sender": "sent test2",
                    "content": "Lorem ipsum"
                },
                {
                    "sender": "sent test3",
                    "content": "Lorem ipsum"
                },
                {
                    "sender": "sent test4",
                    "content": "Lorem ipsum"
                },
                {
                    "sender": "sent test5",
                    "content": "Lorem ipsum"
                }
            ],
            "newMails": 3
        },
        {
            "internalName": "Test2",
            "displayName": "Test2@yahoo.com",
            "type": "yahoo",
            "newMails": 5,
            "inbox": [
                {
                    "sender": "inbox test2",
                    "content": "Lorem ipsum"
                }
            ],
            "outbox": [
                {
                    "sender": "outbox test2",
                    "content": "Lorem ipsum"
                }
            ],
            "sent": [
                {
                    "sender": "sent test2",
                    "content": "Lorem ipsum"
                }
            ]
        },
        {
            "internalName": "Test3",
            "displayName": "Test3@outlook.com",
            "type": "outlook",
            "newMails": 1,
            "inbox": [
                {
                    "sender": "inbox test3",
                    "content": "Lorem ipsum"
                }
            ],
            "outbox": [
                {
                    "sender": "outbox test3",
                    "content": "Lorem ipsum"
                }
            ],
            "sent": [
                {
                    "sender": "sent test3",
                    "content": "Lorem ipsum"
                }
            ]
        },
        {
            "internalName": "Test4",
            "displayName": "Test4@abv.bg",
            "type": "unknown",
            "newMails": 2,
            "inbox": [
                {
                    "sender": "inbox test4",
                    "content": "Lorem ipsum"
                }
            ],
            "outbox": [
                {
                    "sender": "outbox test4",
                    "content": "Lorem ipsum"
                }
            ],
            "sent": [
                {
                    "sender": "sent test4",
                    "content": "Lorem ipsum"
                }
            ]
        }

    ]
    mailsData = [
        {
            "internalName": "Test1",
            "displayName": "Test1@gmail.com",
            "type": "gmail",
            "newMails": 3
        },
        {
            "internalName": "Test2",
            "displayName": "Test2@yahoo.com",
            "type": "yahoo",
            "newMails": 5
        },
        {
            "internalName": "Test3",
            "displayName": "Test3@outlook.com",
            "type": "outlook",
            "newMails": 1
        },
        {
            "internalName": "Test4",
            "displayName": "Test4@abv.bg",
            "type": "unknown",
            "newMails": 2
        }
    ]
}
