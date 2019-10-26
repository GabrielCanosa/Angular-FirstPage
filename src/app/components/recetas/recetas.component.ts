import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RecetasService, Receta } from '../../servicios/recetas.service'

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  recetas:Receta[]=[];

  constructor(private _recetasService:RecetasService, private _router:Router) { }

  ngOnInit() {
    this.recetas = this._recetasService.getRecetas();
    console.log(this.recetas);
  }

  verReceta(i:number){
    this._router.navigate(['./receta', i]);
  }

}
