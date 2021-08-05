import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercontentComponent } from './usercontent.component';

describe('UsercontentComponent', () => {
  let component: UsercontentComponent;
  let fixture: ComponentFixture<UsercontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
