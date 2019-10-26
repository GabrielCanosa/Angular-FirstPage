import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { RecetasService } from './servicios/recetas.service'

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { ChefComponent } from './components/chef/chef.component';
import { RecetaComponent } from './components/receta/receta.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ChefsService } from './servicios/chefs.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RecetasComponent,
    ChefsComponent,
    ChefComponent,
    RecetaComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    RecetasService,
    ChefsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
