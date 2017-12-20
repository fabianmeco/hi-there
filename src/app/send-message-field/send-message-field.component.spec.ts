import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageFieldComponent } from './send-message-field.component';

describe('SendMessageFieldComponent', () => {
  let component: SendMessageFieldComponent;
  let fixture: ComponentFixture<SendMessageFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMessageFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMessageFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
