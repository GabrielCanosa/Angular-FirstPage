import { Component, OnInit } from '@angular/core';

import { RecetasService, Receta } from 'src/app/servicios/recetas.service'

import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  receta:any = {};
  ingredientes:any = {};

  constructor(private activatedRoute: ActivatedRoute, private recetaService: RecetasService, private _router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.receta = this.recetaService.getReceta(params['id']);
      this.ingredientes = this.receta.ingredientes;
    });
   }

  ngOnInit() {
  }

  Regresar(){
    this._router.navigate(['./recetas']);
  }

}
