import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrgComponent } from './edit-org.component';

describe('EditOrgComponent', () => {
  let component: EditOrgComponent;
  let fixture: ComponentFixture<EditOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
