import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailComposerComponent } from './mail-composer.component';

describe('MailComposerComponent', () => {
  let component: MailComposerComponent;
  let fixture: ComponentFixture<MailComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailComposerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
