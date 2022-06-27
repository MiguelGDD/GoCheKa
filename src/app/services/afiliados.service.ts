import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AfiliadosService {
  afiliados: any = [];

  constructor(private http: HttpClient) {
    this.cargar_afiliados();
  }

  cargar_afiliados() {
    this.http
      .get('https://negocios-340d4-default-rtdb.firebaseio.com/afiliados.json')
      .subscribe((resp: any) => {
        this.afiliados = resp;
      });
  }
}
