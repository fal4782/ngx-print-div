import { NgModule } from '@angular/core';
import { NgxPrintDivComponent } from './ngx-print-div.component';
import { NgxPrintDivDirective } from './ngx-print-div.directive';
import { NgxPrintDivService } from './ngx-print-div.service';

@NgModule({
  declarations: [NgxPrintDivComponent, NgxPrintDivDirective],
  imports: [],
  exports: [NgxPrintDivComponent, NgxPrintDivDirective],
  providers: [NgxPrintDivService],
})
export class NgxPrintDivModule {}
