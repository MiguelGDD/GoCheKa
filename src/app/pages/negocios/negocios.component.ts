import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NegocioService } from 'src/app/services/negocio.service';

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.css'],
})
export class NegociosComponent implements OnInit {
  cod: String = '';
  detalles: any = [];
  constructor(public neg: NegocioService, private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      neg.cargar_negocio(params['id']).subscribe((resp: any) => {
        this.detalles=resp;
      });  
      this.cod = params['id'];
    });
  }

  ngOnInit(): void {}
}
