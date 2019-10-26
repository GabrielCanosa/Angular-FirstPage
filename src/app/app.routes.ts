import { RouterModule, Routes } from  '@angular/router'

import { HomeComponent } from './components/home/home.component'
import { RecetasComponent } from './components/recetas/recetas.component'
import { RecetaComponent } from './components/receta/receta.component'
import { ChefsComponent } from './components/chefs/chefs.component'
import { ChefComponent } from './components/chef/chef.component'
import { AboutusComponent } from './components/aboutus/aboutus.component'

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'recetas', component: RecetasComponent},
    {path: 'receta/:id', component: RecetaComponent},
    {path: 'chefs', component: ChefsComponent},
    {path: 'chef/:id', component: ChefComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);