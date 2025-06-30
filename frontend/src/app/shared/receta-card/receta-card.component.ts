import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-receta-card',
  templateUrl: './receta-card.component.html',
  styleUrls: ['./receta-card.component.css']
})
export class RecetaCardComponent {
  @Input() receta: any;
  @Output() verDetalle = new EventEmitter<void>();
  @Output() toggleFavoritoClick = new EventEmitter<string>(); // ← Nuevo evento

  toggleFavorito(nombre: string) {
    this.toggleFavoritoClick.emit(nombre); // ← Emitimos el nombre de la receta
  }
}