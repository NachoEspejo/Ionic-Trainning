import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGoalsPlayerPage } from './edit-goalsplayer.page';

describe('EditGoalsPlayerPage', () => {
  let component: EditGoalsPlayerPage;
  let fixture: ComponentFixture<EditGoalsPlayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGoalsPlayerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGoalsPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
