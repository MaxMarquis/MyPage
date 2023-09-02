import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { EnteteComponent } from './entete/entete.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { ImageProduitComponent } from './image-produit/image-produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { PrixComponent } from './prix/prix.component';
import { LienDetailComponent } from './lien-detail/lien-detail.component';
import { PiedPageComponent } from './pied-page/pied-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnteteComponent,
    ListeProduitsComponent,
    FicheProduitComponent,
    ImageProduitComponent,
    DetailProduitComponent,
    PrixComponent,
    LienDetailComponent,
    PiedPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
