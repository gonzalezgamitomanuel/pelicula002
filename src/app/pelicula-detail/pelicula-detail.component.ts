import { Component, OnInit, Input } from "@angular/core";
import { Pelicula } from "../pelicula";
import { PeliculaService } from "../pelicula.service";
import { MessageService } from "../message.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-pelicula-detail",
  templateUrl: "./pelicula-detail.component.html",
  styleUrls: ["./pelicula-detail.component.css"]
})
export class PeliculaDetailComponent implements OnInit {
  // @Input() and @Output() allow Angular to share data between the parent context and child directives or components
  pelicula: Pelicula;

  constructor(
    private peliculaService: PeliculaService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getPelicula();
  }
  save(presupuestoP: string): void {
    const doc = {
      id: this.pelicula.id,
      nombre: this.pelicula.nombre,
      presupuesto: parseInt(presupuestoP)
    };
    this.peliculaService.updatePelicula(doc).subscribe(() => this.goBack());
  }
  /*
  Para recuperar el documento por el Id reicibido como parámetro
  */
  getPelicula(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.peliculaService.getPelicula(id).subscribe(pelicula => {
      const peliculaTmp: any = pelicula;
      this.pelicula = peliculaTmp;
    });
  }
  goBack(): void {
    this.location.back();
  }
}
