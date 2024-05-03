import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgxPrintDivService } from './ngx-print-div.service';

@Directive({
  selector: '[NgxPrintDiv]',
})
export class NgxPrintDivDirective {
  @Input() printTitle: string = '';
  @Input() printInNewWin: boolean = false;
  @Input() bodyClass: string = '';

  constructor(
    private el: ElementRef,
    private printService: NgxPrintDivService
  ) {}

  @HostListener('click') onClick() {
    const divId = this.el.nativeElement.getAttribute('NgxPrintDiv');
    if (divId) {
      if (this.printInNewWin) {
        this.printService.printDivInNewWindow(
          divId,
          this.printTitle,
          this.bodyClass
        );
      } else {
        this.printService.printDivById(divId, this.printTitle, this.bodyClass);
      }
    } else {
      console.error('Div ID not provided for printing.');
    }
  }
}
