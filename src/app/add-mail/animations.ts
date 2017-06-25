import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeIn = () => {
    return trigger('fadeIn', [
        state('*', style({ opacity: 1 })),
        transition('void => *', [
            style({ opacity: 0 }),
            animate('30ms ease-in-out', style({ opacity: 1 }))
        ])
    ]);
}

export const buttonShrink = () => {
    return trigger('buttonShrink', [
        state('*', style({
            width: '100%',
            height: 'auto',
            opacity: 1
        })),
        transition(':enter', [
            style({
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                left: 0,
                top: 0,
                opacity: .5
            }),
            animate('.3s ease-out', style({
                opacity: 1,
                width: '100%',
                height: '50px',
                top: '260px'
            }))
        ])
    ]);
}