import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaAlmuerzosComponent } from './categoria-almuerzos.component';

describe('CategoriaAlmuerzosComponent', () => {
  let component: CategoriaAlmuerzosComponent;
  let fixture: ComponentFixture<CategoriaAlmuerzosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaAlmuerzosComponent]
    });
    fixture = TestBed.createComponent(CategoriaAlmuerzosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
