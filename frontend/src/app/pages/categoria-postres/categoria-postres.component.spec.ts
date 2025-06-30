import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaPostresComponent } from './categoria-postres.component';

describe('CategoriaPostresComponent', () => {
  let component: CategoriaPostresComponent;
  let fixture: ComponentFixture<CategoriaPostresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaPostresComponent]
    });
    fixture = TestBed.createComponent(CategoriaPostresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
