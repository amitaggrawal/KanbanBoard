import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintuploadComponent } from './sprintupload.component';

describe('SprintuploadComponent', () => {
  let component: SprintuploadComponent;
  let fixture: ComponentFixture<SprintuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
