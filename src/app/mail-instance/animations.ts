/**
 * Created by zkirilov on 29.6.2017 г..
 */
import {trigger, style, animate, transition, query} from '@angular/animations';

export const expandOnClick = () => {
    return trigger('expandOnClick', [
        transition('normal => expand', [
            query('.animated-list-item', [
                style({
                    // 'position': 'fixed',
                    'background-color': 'white',
                    'color': 'black',
                    'width': '100vw',
                    'height': '20vh',
                    'z-index': 101,
                    'left': '*',
                    'top': '*',
                }),
                animate('3s linear', style({
                    'height': '100vh',
                    'background-color': '#673ab7',
                    'color': 'rgba(255,255,255,.87)',
                    'width': '100vw',
                    // 'left': '0',
                    // 'top': '0',
                }))
            ]),
        ])
    ]);
};
