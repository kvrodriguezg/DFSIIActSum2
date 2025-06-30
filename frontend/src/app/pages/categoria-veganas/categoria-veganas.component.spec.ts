import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaVeganasComponent } from './categoria-veganas.component';

describe('CategoriaVeganasComponent', () => {
  let component: CategoriaVeganasComponent;
  let fixture: ComponentFixture<CategoriaVeganasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaVeganasComponent]
    });
    fixture = TestBed.createComponent(CategoriaVeganasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
