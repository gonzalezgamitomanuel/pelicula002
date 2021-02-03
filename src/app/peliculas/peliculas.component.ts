import { Component, OnInit } from "@angular/core";
import { Pelicula } from "../pelicula";
import { PeliculaService } from "../pelicula.service";
import { MessageService } from "../message.service";

@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.css"]
})
export class PeliculasComponent implements OnInit {
  peliculas: Pelicula[];
  peliculasApi = null;
  selectedPelicula: Pelicula;
  peliculaTmp: any;

  constructor(
    private peliculaService: PeliculaService,
    private messageService: MessageService
  ) {}

  onSelect(pelicula: Pelicula): void {
    this.selectedPelicula = pelicula;
    this.messageService.add(
      `PeliculasComponent: Selected pelicula id=${pelicula.id}`
    );
  }

  getPeliculasApi() {
    this.peliculaService.getPeliculasApi().subscribe(peliculas => {
      this.peliculasApi = peliculas;
      this.peliculas = this.peliculasApi;
    });
  }

  delete(pelicula: Pelicula): void {
    /* filter crea otro array filtrando los elementos que sean distintos de la "pelicula" recibida.
    Se trata de que el array en memoria conincida con el server
    */
    this.peliculas = this.peliculas.filter(h => h !== pelicula);
    this.peliculaService.deletePelicula(pelicula).subscribe();
  }

  add(nameP: string, presupuestoP: string): void {
    const nameV = nameP.trim();
    const presupuestoV = parseInt(presupuestoP);
    const newDoc: any = {
      name: nameV,
      presupuesto: presupuestoV
    };
    this.peliculaService.addPelicula(newDoc).subscribe(pelicula => {
      this.peliculaTmp = pelicula;
      this.peliculas.push(this.peliculaTmp);
    });
  }

  ngOnInit() {
    this.getPeliculasApi();
  }
}
