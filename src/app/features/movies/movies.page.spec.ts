import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPage } from './movies.page';

describe('Tab1Page', () => {
  let component: MoviesPage;
  let fixture: ComponentFixture<MoviesPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(MoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
