/**
 * Created by zkirilov on 26.6.2017 г..
 */
import {trigger, style, state, animate, transition, query, stagger} from '@angular/animations';

export const listAnimation = () => {
    return trigger('listAnimation', [
        transition('* => pending', [
            // this hides everything right away
            query('.animated-list-item', style({opacity: 0}), {optional: true}),
            query('.animated-list-item', stagger('20ms', [
                animate('.3s', style({opacity: 1}))
            ]), {optional: true}),
        ])
    ]);
};

export const expandingFAB = () => {
    return trigger('expand', [
        state('*', style({
            position: 'fixed',
            width: '0',
            height: '0',
            opacity: 1,
            background: '#ffd740',
            left: '150vw',
            top: '150vh',
            'border-radius': '100%'
        })),
        transition('normal => expand', [
            animate('.2s ease-in-out', style({
                position: 'fixed',
                width: '150vh',
                height: '150vh',
                left: '-10vw',
                top: '-50vh',
                opacity: .6
            }))
        ])
    ]);
};

export const slideToHeader = () => {
    return trigger('slideToHeader', [
        transition(':enter', [
            style({
                top: '-100%'
            }),
            animate('.3s linear', style({
               top: '10px'
            }))
        ])
    ]);
};
