import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodopopupComponent } from './todopopup.component';

describe('TodopopupComponent', () => {
  let component: TodopopupComponent;
  let fixture: ComponentFixture<TodopopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodopopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodopopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
