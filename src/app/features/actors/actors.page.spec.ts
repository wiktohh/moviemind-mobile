import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsPage } from './actors.page';

describe('Tab2Page', () => {
  let component: ActorsPage;
  let fixture: ComponentFixture<ActorsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ActorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
