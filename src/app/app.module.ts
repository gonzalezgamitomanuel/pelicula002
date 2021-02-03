import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from "highcharts-angular";

import { AppComponent } from "./app.component";
import { PeliculasComponent } from "./peliculas/peliculas.component";
import { PeliculaDetailComponent } from "./pelicula-detail/pelicula-detail.component";
import { PeliculaService } from "./pelicula.service";
import { MessagesComponent } from "./messages/messages.component";
import { MessageService } from "./message.service";
import { AppRoutingModule } from "./app-routing.module";
import { Grafico01Component } from "./grafico01/grafico01.component";
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  declarations: [
    AppComponent,
    PeliculasComponent,
    PeliculaDetailComponent,
    MessagesComponent,
    Grafico01Component
  ],
  bootstrap: [AppComponent],
  providers: [PeliculaService, MessageService,  {provide:
    APP_BASE_HREF, useValue: '/peliculas'}
    ]
})
export class AppModule {}
