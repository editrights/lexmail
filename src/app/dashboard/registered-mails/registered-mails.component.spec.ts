import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredMailsComponent } from './registered-mails.component';

describe('RegisteredMailsComponent', () => {
  let component: RegisteredMailsComponent;
  let fixture: ComponentFixture<RegisteredMailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredMailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredMailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
