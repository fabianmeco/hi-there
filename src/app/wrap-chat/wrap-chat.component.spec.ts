import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapChatComponent } from './wrap-chat.component';

describe('WrapChatComponent', () => {
  let component: WrapChatComponent;
  let fixture: ComponentFixture<WrapChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
