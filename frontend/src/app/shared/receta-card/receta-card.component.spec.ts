import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaCardComponent } from './receta-card.component';

describe('RecetaCardComponent', () => {
  let component: RecetaCardComponent;
  let fixture: ComponentFixture<RecetaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecetaCardComponent]
    });
    fixture = TestBed.createComponent(RecetaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
