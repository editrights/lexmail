import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMailPageComponent } from './add-mail-page.component';

describe('AddMailPageComponent', () => {
  let component: AddMailPageComponent;
  let fixture: ComponentFixture<AddMailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
