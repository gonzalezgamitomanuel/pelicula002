import { Injectable } from "@angular/core";
import { MessageService } from "./message.service";
import { HttpClient } from "@angular/common/http";
import { Pelicula } from "./pelicula";

@Injectable({
  providedIn: "root"
})
export class PeliculaService {
  private url = "https://6009d07e778d1a00177930be.mockapi.io/peliculas";

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getPeliculasApi() {
    this.messageService.add("Mostrando nuestras peliculas");
    return this.http.get(this.url);
  }

  /** PUT: update the pelicula by ID on the server */
  updatePelicula(doc: any) {
    console.log("en update");
    console.log(doc);
    const urlId = `${this.url}/${doc.id}`;
    return this.http.put(urlId, doc);
  }

  /** DELETE: delete the pelicula by Id from the server */
  deletePelicula(pelicula: Pelicula) {
    // const id = typeof pelicula === "number" ? pelicula : pelicula.id;
    const urlId = `${this.url}/${pelicula.id}`;
    return this.http.delete(urlId);
  }
  /** POST: add a new pelicula to the server */
  addPelicula(doc: any) {
    return this.http.post(this.url, doc);
  }

  /** GET pelicula by id. Will 404 if id not found */
  getPelicula(id: number) {
    const url = `${this.url}/${id}`;
    return this.http.get(url);
  }
}
