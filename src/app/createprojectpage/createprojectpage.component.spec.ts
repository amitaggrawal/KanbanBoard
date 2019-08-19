import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprojectpageComponent } from './createprojectpage.component';

describe('CreateprojectpageComponent', () => {
  let component: CreateprojectpageComponent;
  let fixture: ComponentFixture<CreateprojectpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateprojectpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateprojectpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
