import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PeliculasComponent } from "./peliculas/peliculas.component";
import { PeliculaDetailComponent } from "./pelicula-detail/pelicula-detail.component";
import { Grafico01Component } from "./grafico01/grafico01.component";

const routes: Routes = [
  { path: "peliculas", component: PeliculasComponent },
  { path: "grafico", component: Grafico01Component },
  { path: "detail/:id", component: PeliculaDetailComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
