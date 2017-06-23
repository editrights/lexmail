import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailProviderComponent } from './mail-provider.component';

describe('MailProviderComponent', () => {
  let component: MailProviderComponent;
  let fixture: ComponentFixture<MailProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
