import { trigger, style, animate, transition } from '@angular/animations';

export const fabToggle = trigger('fabToggle', [
    transition(':enter', [
        style({ transform: 'translate(0, 200%)' }),
        animate('.4s ease-in-out', style({ transform: 'translate(0, 0)' }))
    ]),
    transition('* => *', [
        style({ transform: 'translate(0, 0)' }),
        animate('.4s ease-in-out', style({ transform: 'translate(0, 200%)' }))
    ])
]);
