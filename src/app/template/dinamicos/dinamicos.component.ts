import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  nuevoJuego = '';
  persona: Persona = {
    nombre: 'Javier',
    favoritos: [
      { id: 1, nombre: 'Final Fantasy' },
      { id: 2, nombre: 'Monkey Island' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  guardar(): void {
    console.log('click en el boton');
  }

  eliminar(index: number): void {
    this.persona.favoritos.splice(index, 1);
  }

  agregar(): void {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };
    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }

}
