/**
 * Created by zkirilov on 27.6.2017 г..
 */
import {trigger, state, style, animate, transition} from '@angular/animations';

export const shrinkOnEnter = () => {
    return trigger('shrinkOnEnter', [
        transition(':enter', [
            style({
                transform: 'translate(220%, -200%)',
                width: '30%'
            }),
            animate('.3s linear', style({
                transform: 'translate(220%, -63px)',
            }))
        ])
    ]);
};
