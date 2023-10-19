import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterUsersListComponent } from './filter-users-list.component';

describe('FilterUsersListComponent', () => {
  let component: FilterUsersListComponent;
  let fixture: ComponentFixture<FilterUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterUsersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
