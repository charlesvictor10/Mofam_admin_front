import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {API_BASE_URL} from "../constants/constants";
import {Photo} from '../../Model/photo';
import {ProduitCommande} from '../../Model/produitCommande';
import {Utilisateur} from '../../Model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  postResource(url,data){
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.post(url,data,{headers:headers});
  }

  register(data){
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.post(API_BASE_URL+"/admin/signup",data,{headers:headers});
  }

  updateResource(url,data){
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.put(url,data,{headers:headers});
  }

  deleteCategorie(id:number){
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.delete(API_BASE_URL+"/admin/deleteCategorie/"+id,{headers:headers});
  }

  deleteSousCategorie(id:number){
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.delete(API_BASE_URL+"/admin/deleteSousCategorie/"+id,{headers:headers});
  }

  deleteProduit(id:number){
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.delete(API_BASE_URL+"/admin/deleteProduit/"+id,{headers:headers});
  }

  deleteRegion(id:number){
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.delete(API_BASE_URL+"/admin/deleteRegion/"+id,{headers:headers});
  }

  deleteDepartement(id:number){
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.delete(API_BASE_URL+"/admin/deleteDepartement/"+id,{headers:headers});
  }

  deleteVille(id:number){
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.delete(API_BASE_URL+"/admin/deleteVille/"+id,{headers:headers});
  }

  deleteCommande(code:string){
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.delete(API_BASE_URL+"/admin/deleteCommande/"+code,{headers:headers});
  }

  deleteProduitCommande(id:number){
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.delete(API_BASE_URL+"/admin/deleteProduitCommande/"+id,{headers:headers});
  }

  deleteAcheteur(id:number){
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.delete(API_BASE_URL+"/admin/deleteAcheteur/"+id,{headers:headers});
  }

  deletePrestataire(id:number){
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.delete(API_BASE_URL+"/admin/deletePrestataire/"+id,{headers:headers});
  }

  deletePartener(id:number){
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.delete(API_BASE_URL+"/admin/deletePartener/"+id,{headers:headers});
  }

  deletePhoto(id:number){
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.delete(API_BASE_URL+"/admin/deletePhoto/"+id,{headers:headers});
  }

  deleteLogo(id:number){
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.delete(API_BASE_URL+"/admin/deleteLogo/"+id,{headers:headers});
  }

  deleteRole(id:number){
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.delete(API_BASE_URL+"/admin/deleteRole/"+id,{headers:headers});
  }

  getCategorie(id:number): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/editerCategorie/"+id,{headers:headers});
  }

  getSousCategorie(id:number): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/editerSousCategorie/"+id,{headers:headers});
  }

  getProduit(id:number): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/editerProduit/"+id,{headers:headers});
  }

  getCommande(code:string): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/editerCommande/"+code,{headers:headers});
  }

  getProduitCommande(id:number): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/editerProduitCommande/"+id,{headers:headers});
  }

  getRegion(id:number): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/editerRegion/"+id,{headers:headers});
  }

  getDepartement(id:number): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/editerDepartement/"+id,{headers:headers});
  }

  getVille(id:number): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/editerVille/"+id,{headers:headers});
  }

  getPhoto(id:number): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/editerPhoto/"+id,{headers:headers});
  }

  getLogo(id:number): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/editerLogo/"+id,{headers:headers});
  }

  getCategorieList(): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/listeCategorie",{headers:headers});
  }

  getSousCategorieList(): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/listeSousCategorie",{headers:headers});
  }

  getProduitList(): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/listeProduit",{headers:headers});
  }

  getPhotoList(): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/listePhoto",{headers:headers});
  }

  getLogoList(): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/listeLogo",{headers:headers});
  }

  getRegionList(): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/listeRegion",{headers:headers});
  }

  getDepartementList(): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/listeDepartement",{headers:headers});
  }

  getVilleList(): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/listeVille",{headers:headers});
  }

  getCommandeList(): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/listeCommande",{headers:headers});
  }

  getCommandePrestataireList(): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/listeCommandePrestataire",{headers:headers});
  }

  getProduitsCommandeList(): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/listeProduitCommande",{headers:headers});
  }

  getCommandesParPrestataireList(prestataire: Utilisateur): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/listeCommandeParPrestataire/?prestataire="+prestataire,{headers:headers});
  }

  getPartenaireList(): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/listePartener",{headers:headers});
  }

  getAcheteurList(): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/listeAcheteur",{headers:headers});
  }

  getPrestataireList(): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/listePrestataire",{headers:headers});
  }

  getUtilisateurList(): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/listeUtilisateur",{headers:headers});
  }

  getRoleList(): Observable<any> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.get(API_BASE_URL+"/admin/listeRole",{headers:headers});
  }

  uploadPhoto(file:File, idPhoto): Observable<HttpEvent<{}>> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    let formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', API_BASE_URL+'/admin/uploadPhoto/'+idPhoto, formData, {
      reportProgress: true,
      responseType: 'json',
      headers: headers
    });
    return this.http.request(req);
  }

  uploadLogo(file:File, idLogo): Observable<HttpEvent<{}>> {
    let headers = new HttpHeaders({'authorization':'Bearer '+localStorage.getItem("token")});
    let formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', API_BASE_URL+'/admin/uploadLogo/'+idLogo, formData, {
      reportProgress: true,
      responseType: 'json',
      headers: headers
    });
    return this.http.request(req);
  }
}
