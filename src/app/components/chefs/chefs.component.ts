import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { ChefsService, Chef } from '../../servicios/chefs.service'

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {

  chefs:Chef[]=[];

  constructor(private _chefsService:ChefsService, private _router:Router) { }

  ngOnInit() {
    this.chefs = this._chefsService.getChefs();
  }

  verChef(i:number){
    this._router.navigate(['./chef', i]);
  }

}
