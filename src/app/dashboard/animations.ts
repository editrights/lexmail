import { trigger, state, style, animate, transition } from '@angular/animations';

// export const diagonalSlide = trigger('diagonalSlide', [
//     state('*', style({ position: 'initial' })),
//     transition('* => slideBack', [
//         style({ position: 'fixed', left: '50%', top: '50px' }),
//         animate('3s ease-in-out', style({ position: 'fixed', left: '0', top: '150px' }))
//     ]),
//     transition('* => slideOut', [
//         style({ transform: 'translateX(0%)' }),
//         animate('.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
//     ])
// ]);

// export const diagonalSlide = (topCoord) => {
//     return trigger('diagonalSlide', [
//         state('*', style({ position: 'initial' })),
//         transition('* => slideBack', [
//             style({ position: 'fixed', left: '50%', top: '50px' }),
//             animate('1s ease-in-out', style({ position: 'fixed', left: '0', top: topCoord }))
//         ]),
//         transition('* => slideOut', [
//             style({ transform: 'translateX(0%)' }),
//             animate('.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
//         ])
//     ]);
// }

export const diagonalSlide = (topCoord) => {
    return trigger('diagonalSlide', [
        state('*', style({ transform: 'translate(0, 0)' })),
        transition('* => slideBack', [
            style({ position: 'fixed', transform: 'translate(100%, -500%)' }),
            animate('.3s ease-in-out', style({ position: 'fixed', transform: 'translate(0, 0)' }))
        ]),
        transition('* => slideOut', [
            style({ transform: 'translateX(0%)' }),
            animate('.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}