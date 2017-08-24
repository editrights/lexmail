import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailItemsListComponent } from './mail-items-list.component';

describe('MailItemsListComponent', () => {
  let component: MailItemsListComponent;
  let fixture: ComponentFixture<MailItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
