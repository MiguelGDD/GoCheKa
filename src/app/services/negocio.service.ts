import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NegocioService {
  constructor(public http: HttpClient) {}

  public cargar_negocio(cod:string) {
    return this.http.get(
      `https://negocios-340d4-default-rtdb.firebaseio.com/negocios/${cod}.json`
    );
  }
} 
