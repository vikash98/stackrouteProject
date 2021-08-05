import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavrouitesComponent } from './favrouites.component';

describe('FavrouitesComponent', () => {
  let component: FavrouitesComponent;
  let fixture: ComponentFixture<FavrouitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavrouitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavrouitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
