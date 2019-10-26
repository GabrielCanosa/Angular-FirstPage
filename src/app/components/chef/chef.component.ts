import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefsService, Chef } from '../../servicios/chefs.service';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  chef:any = {};

  constructor(private activatedRoute: ActivatedRoute, private chefService: ChefsService, private _router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.chef = this.chefService.getChef(params['id']);
    });
   }

  ngOnInit() {
  }

  Regresar(){
    this._router.navigate(['./chefs']);
  }

}
