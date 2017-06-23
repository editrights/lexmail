import {trigger, state, style, animate, transition} from '@angular/animations';

export const fabToggle = trigger('fabToggle', [
    state('*', style({width: '56px', height: '56px'})),
    transition(':enter', [
        style({width: '0', height: '0'}),
        animate('.6s ease-in-out', style({width: '56px', height: '56px'}))
    ]),
    transition(':leave', [
        style({width: '56px', height: '56px'}),
        animate('.6s ease-in-out', style({width: '0', height: '0'}))
    ])
]);