import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import {FullCalendarModule} from '@fullcalendar/angular';

import { LoginComponent } from './login/login.component';
import { AddCategorieComponent } from './admin/add-categorie/add-categorie.component';
import { EditCategorieComponent } from './admin/edit-categorie/edit-categorie.component';
import { AddSousCategorieComponent } from './admin/add-sous-categorie/add-sous-categorie.component';
import { EditSousCategorieComponent } from './admin/edit-sous-categorie/edit-sous-categorie.component';
import { AddProduitComponent } from './admin/add-produit/add-produit.component';
import { EditProduitComponent } from './admin/edit-produit/edit-produit.component';
import { AddRegionComponent } from './admin/add-region/add-region.component';
import { EditRegionComponent } from './admin/edit-region/edit-region.component';
import { ListeRegionComponent } from './admin/liste-region/liste-region.component';
import { AddDepartementComponent } from './admin/add-departement/add-departement.component';
import { EditDepartementComponent } from './admin/edit-departement/edit-departement.component';
import { ListeDepartementComponent } from './admin/liste-departement/liste-departement.component';
import { AddVilleComponent } from './admin/add-ville/add-ville.component';
import { EditVilleComponent } from './admin/edit-ville/edit-ville.component';
import { ListeVilleComponent } from './admin/liste-ville/liste-ville.component';
import { ListeSousCategorieComponent } from './admin/liste-sous-categorie/liste-sous-categorie.component';
import { ListeProduitComponent } from './admin/liste-produit/liste-produit.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { ListeCategorieComponent } from './admin/liste-categorie/liste-categorie.component';
import { ListeCommandeComponent } from './admin/liste-commande/liste-commande.component';
import { EditCommandeComponent } from './admin/edit-commande/edit-commande.component';
import { AddPartenaireComponent } from './admin/add-partenaire/add-partenaire.component';
import { ListePartenaireComponent } from './admin/liste-partenaire/liste-partenaire.component';
import { AddPhotoComponent } from './admin/add-photo/add-photo.component';
import { ListePhotoProduitsComponent } from './admin/liste-photo-produits/liste-photo-produits.component';
import { ListePhotoPartenersComponent } from './admin/liste-photo-parteners/liste-photo-parteners.component';
import { AddLogoComponent } from './admin/add-logo/add-logo.component';
import { ListeAcheteurComponent } from './admin/liste-acheteur/liste-acheteur.component';
import { AddCommandeComponent } from './admin/add-commande/add-commande.component';
import { ListeProduitCommandeComponent } from './admin/liste-produit-commande/liste-produit-commande.component';
import { AddAcheteurComponent } from './admin/add-acheteur/add-acheteur.component';
import { AddPrestataireComponent } from './admin/add-prestataire/add-prestataire.component';
import { ListePrestataireComponent } from './admin/liste-prestataire/liste-prestataire.component';
import { ListeRoleComponent } from './admin/liste-role/liste-role.component';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { EditPhotoComponent } from './admin/edit-photo/edit-photo.component';
import { EditLogoComponent } from './admin/edit-logo/edit-logo.component';
import { ListeCommandePrestataireComponent } from './admin/liste-commande-prestataire/liste-commande-prestataire.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { ListeCommandeParPrestataireComponent } from './admin/liste-commande-par-prestataire/liste-commande-par-prestataire.component';
import { ListeUtilisateurComponent } from './admin/liste-utilisateur/liste-utilisateur.component';
import { AddUtilisateurComponent } from './admin/add-utilisateur/add-utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddCategorieComponent,
    EditCategorieComponent,
    AddSousCategorieComponent,
    EditSousCategorieComponent,
    AddProduitComponent,
    EditProduitComponent,
    AddRegionComponent,
    EditRegionComponent,
    ListeRegionComponent,
    AddDepartementComponent,
    EditDepartementComponent,
    ListeDepartementComponent,
    AddVilleComponent,
    EditVilleComponent,
    ListeVilleComponent,
    ListeSousCategorieComponent,
    ListeProduitComponent,
    FooterComponent,
    HeaderComponent,
    LeftSideComponent,
    ListeCategorieComponent,
    ListeCommandeComponent,
    EditCommandeComponent,
    AddPartenaireComponent,
    ListePartenaireComponent,
    AddPhotoComponent,
    ListePhotoProduitsComponent,
    ListePhotoPartenersComponent,
    AddLogoComponent,
    ListeAcheteurComponent,
    AddCommandeComponent,
    ListeProduitCommandeComponent,
    AddAcheteurComponent,
    AddPrestataireComponent,
    ListePrestataireComponent,
    ListeRoleComponent,
    AddRoleComponent,
    EditPhotoComponent,
    EditLogoComponent,
    ListeCommandePrestataireComponent,
    ListeCommandeParPrestataireComponent,
    ListeUtilisateurComponent,
    AddUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule,
    NgMultiSelectDropDownModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
