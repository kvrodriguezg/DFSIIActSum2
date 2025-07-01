import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';
import { FavoritosService } from 'src/app/services/favoritos.service';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, AfterViewInit {
  recetasFavoritas: any[] = [];
  recetaSeleccionada: any = null;
  private modalInstance: Modal | null = null;

  @ViewChild('modalReceta') modalReceta!: ElementRef;

  constructor(
    private favoritosService: FavoritosService,
    private recetasService: RecetasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const favoritos = this.favoritosService.obtenerFavoritos();
    const sesion = this.favoritosService.obtenerSesion();


    if (!sesion || sesion.tipo === 'admin') {
      alert('Debes iniciar sesión como usuario normal para ver tus favoritos.');
      this.router.navigate(['/']); 
      return;
    }

    const favoritosUsuario = favoritos.filter(f => f.email === sesion.email);

    this.recetasFavoritas = [];

    const recetasPorCategoria = this.recetasService.getRecetasPorCategoria();

    for (const tipo in recetasPorCategoria) {
      const recetas = recetasPorCategoria[tipo];
      for (const receta of recetas) {
        if (favoritosUsuario.some(f => f.receta === receta.nombre)) {
          this.recetasFavoritas.push(receta);
        }
      }
    }
  }

  ngAfterViewInit(): void {
    if (this.modalReceta) {
      this.modalInstance = new Modal(this.modalReceta.nativeElement);
    }
  }

  abrirModal(receta: any): void {
    this.recetaSeleccionada = receta;
    this.modalInstance?.show();
  }
}