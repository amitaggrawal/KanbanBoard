import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarKanbanComponent } from './navbar-kanban.component';

describe('NavbarKanbanComponent', () => {
  let component: NavbarKanbanComponent;
  let fixture: ComponentFixture<NavbarKanbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarKanbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
