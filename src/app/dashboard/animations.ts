import {trigger, state, style, animate, transition} from '@angular/animations';

export const diagonalSlide = (topCoord) => {
    return trigger('diagonalSlide', [
        state('*', style({transform: 'translate(0, 0)'})),
        transition('* => slideBack', [
            style({position: 'fixed', transform: 'translate(70%, -500%)'}),
            animate('.8s ease-in-out', style({position: 'fixed', transform: 'translate(0, 0)'}))
        ]),
        transition('* => slideOut', [
            style({transform: 'translateX(0%)'}),
            animate('.8s ease-in-out', style({transform: 'translateX(-100%)'}))
        ])
    ]);
};

export const expandingLogo = () => {
    return trigger('logoExpand', [
        transition('normal => expand', [
            animate('.3s ease-in-out', style({
                width: '60vh',
                height: '60vh',
                opacity: .6
            }))
        ])
    ]);
};

export const backInLine = () => {
    return trigger('backInLine', [
        transition('* => backInLine', [
            style({
                position: 'relative', transform: 'translate(0, -100%)', width: '60vh',
                height: '60vh',
            }),
            animate('.3s ease-in-out', style({
                transform: 'translate(0, 0%)',
                top: '50%',
                width: '*',
                height: '*',
                opacity: .6
            }))
        ])
    ]);
};
