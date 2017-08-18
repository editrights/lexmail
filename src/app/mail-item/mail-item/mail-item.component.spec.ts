import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailInstanceComponent } from './mail-item.component';

describe('MailInstanceComponent', () => {
  let component: MailInstanceComponent;
  let fixture: ComponentFixture<MailInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
