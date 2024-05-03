import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPrintDivComponent } from './ngx-print-div.component';

describe('NgxPrintDivComponent', () => {
  let component: NgxPrintDivComponent;
  let fixture: ComponentFixture<NgxPrintDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPrintDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxPrintDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
