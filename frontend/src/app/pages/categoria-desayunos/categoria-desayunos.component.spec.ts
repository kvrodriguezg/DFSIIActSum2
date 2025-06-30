import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaDesayunosComponent } from './categoria-desayunos.component';

describe('CategoriaDesayunosComponent', () => {
  let component: CategoriaDesayunosComponent;
  let fixture: ComponentFixture<CategoriaDesayunosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaDesayunosComponent]
    });
    fixture = TestBed.createComponent(CategoriaDesayunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
