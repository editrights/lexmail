import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appResizable]'
})
export class ResizableDirective {

  constructor(el: ElementRef) {
    el.nativeElement.addEventListener('change', event => {
        event.target.style.height = el.nativeElement.scrollHeight + 'px';
        event.target.scrollTop = el.nativeElement.scrollHeight;
    });
  }

}
