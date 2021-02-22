import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCategorieComponent} from "./admin/add-categorie/add-categorie.component";
import {ListeCategorieComponent} from "./admin/liste-categorie/liste-categorie.component";
import {EditCategorieComponent} from "./admin/edit-categorie/edit-categorie.component";
import {AddSousCategorieComponent} from "./admin/add-sous-categorie/add-sous-categorie.component";
import {ListeSousCategorieComponent} from "./admin/liste-sous-categorie/liste-sous-categorie.component";
import {EditSousCategorieComponent} from "./admin/edit-sous-categorie/edit-sous-categorie.component";
import {AddProduitComponent} from "./admin/add-produit/add-produit.component";
import {ListeProduitComponent} from "./admin/liste-produit/liste-produit.component";
import {EditProduitComponent} from "./admin/edit-produit/edit-produit.component";
import {AddRegionComponent} from "./admin/add-region/add-region.component";
import {ListeRegionComponent} from "./admin/liste-region/liste-region.component";
import {EditRegionComponent} from "./admin/edit-region/edit-region.component";
import {AddDepartementComponent} from "./admin/add-departement/add-departement.component";
import {ListeDepartementComponent} from "./admin/liste-departement/liste-departement.component";
import {EditDepartementComponent} from "./admin/edit-departement/edit-departement.component";
import {AddVilleComponent} from "./admin/add-ville/add-ville.component";
import {ListeVilleComponent} from "./admin/liste-ville/liste-ville.component";
import {EditVilleComponent} from "./admin/edit-ville/edit-ville.component";
import {ListeCommandeComponent} from "./admin/liste-commande/liste-commande.component";
import {AddPartenaireComponent} from "./admin/add-partenaire/add-partenaire.component";
import {ListePartenaireComponent} from "./admin/liste-partenaire/liste-partenaire.component";
import {AddPhotoComponent} from "./admin/add-photo/add-photo.component";
import {LoginComponent} from "./login/login.component";
import {ListePhotoProduitsComponent} from './admin/liste-photo-produits/liste-photo-produits.component';
import {ListePhotoPartenersComponent} from './admin/liste-photo-parteners/liste-photo-parteners.component';
import {AddLogoComponent} from './admin/add-logo/add-logo.component';
import {ListeAcheteurComponent} from './admin/liste-acheteur/liste-acheteur.component';
import {AddCommandeComponent} from './admin/add-commande/add-commande.component';
import {EditCommandeComponent} from './admin/edit-commande/edit-commande.component';
import {ListeProduitCommandeComponent} from './admin/liste-produit-commande/liste-produit-commande.component';
import {AddAcheteurComponent} from './admin/add-acheteur/add-acheteur.component';
import {AddPrestataireComponent} from './admin/add-prestataire/add-prestataire.component';
import {ListePrestataireComponent} from './admin/liste-prestataire/liste-prestataire.component';
import {ListeRoleComponent} from './admin/liste-role/liste-role.component';
import {AddRoleComponent} from './admin/add-role/add-role.component';
import {EditPhotoComponent} from './admin/edit-photo/edit-photo.component';
import {EditLogoComponent} from './admin/edit-logo/edit-logo.component';
import {ListeCommandePrestataireComponent} from './admin/liste-commande-prestataire/liste-commande-prestataire.component';
import {ListeCommandeParPrestataireComponent} from './admin/liste-commande-par-prestataire/liste-commande-par-prestataire.component';
import {AddUtilisateurComponent} from './admin/add-utilisateur/add-utilisateur.component';
import {ListeUtilisateurComponent} from './admin/liste-utilisateur/liste-utilisateur.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  
  {path:"admin/addCategorie", component:AddCategorieComponent},
  {path:"admin/listeCategorie", component:ListeCategorieComponent},
  {path:"admin/editCategorie/:id", component:EditCategorieComponent},

  {path:"admin/addSousCategorie", component:AddSousCategorieComponent},
  {path:"admin/listeSousCategorie", component:ListeSousCategorieComponent},
  {path:"admin/editSousCategorie/:id", component:EditSousCategorieComponent},

  {path:"admin/addProduit", component:AddProduitComponent},
  {path:"admin/listeProduit", component:ListeProduitComponent},
  {path:"admin/editProduit/:id", component:EditProduitComponent},

  {path:"admin/addRegion", component:AddRegionComponent},
  {path:"admin/listeRegion", component:ListeRegionComponent},
  {path:"admin/editRegion/:id", component:EditRegionComponent},

  {path:"admin/addDepartement", component:AddDepartementComponent},
  {path:"admin/listeDepartement", component:ListeDepartementComponent},
  {path:"admin/editDepartement/:id", component:EditDepartementComponent},

  {path:"admin/addVille", component:AddVilleComponent},
  {path:"admin/listeVille", component:ListeVilleComponent},
  {path:"admin/editVille/:id", component:EditVilleComponent},

  {path:"admin/addCommande", component:AddCommandeComponent},
  {path:"admin/listeCommande", component:ListeCommandeComponent},
  {path:"admin/editCommande/:code", component:EditCommandeComponent},
  {path:"admin/listeProduitCommande", component:ListeProduitCommandeComponent},
  {path:"admin/listeCommandePrestataire", component:ListeCommandePrestataireComponent},
  {path:"admin/listeCommandeParPrestataire", component:ListeCommandeParPrestataireComponent},

  {path:"admin/addAcheteur", component:AddAcheteurComponent},
  {path:"admin/listeAcheteur", component:ListeAcheteurComponent},
  {path:"admin/listePrestataire", component:ListePrestataireComponent},
  {path:"admin/addPrestataire", component:AddPrestataireComponent},

  {path:"admin/addPartenaire", component:AddPartenaireComponent},
  {path:"admin/listePartenaire", component:ListePartenaireComponent},

  {path:"admin/addPhoto", component:AddPhotoComponent},
  {path:"admin/editerPhoto/:id", component:EditPhotoComponent},
  {path:"admin/listePhotoProduits", component:ListePhotoProduitsComponent},

  {path:"admin/addLogo", component:AddLogoComponent},
  {path:"admin/listePhotoParteners", component:ListePhotoPartenersComponent},
  {path:"admin/editerLogo/:id", component:EditLogoComponent},

  {path:"admin/addUtilisateur", component:AddUtilisateurComponent},
  {path:"admin/listeUtilisateur", component:ListeUtilisateurComponent},

  {path:"admin/listeRole", component:ListeRoleComponent},
  {path:"admin/addRole", component:AddRoleComponent},

  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
