/**
 * Created by zkirilov on 23.6.2017 г..
 */
import {trigger, state, style, animate, transition} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
    state('*', style({height: '*', opacity: 1})),
    transition('void => *', [
        style({height: '0', opacity: '0'}),
        animate('30ms ease-in-out', style({height: '*', opacity: 1}))
    ])
]);
