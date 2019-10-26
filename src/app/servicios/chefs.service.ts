import { Injectable } from '@angular/core'
@Injectable()
export class ChefsService{

    private chefs:Chef[] = [
            {
              id: 1,
              nombre: "Karlos Arguiñano",
              bio: "Es un cocinero, presentador de televisión, actor, escritor y empresario español",
              img: "assets/img/karlos.jpg"
            },
            {
              id: 2,
              nombre: "Alberto Chicote",
              bio: "Es un chef y presentador de televisión español. En su trayectoria culinaria ha destacado por mezclar la cocina tradicional con otras técnicas, siendo uno de los pioneros de la cocina fusión en la gastronomía española.",
              img: "assets/img/chicote.jpg"
            },
            {
              id: 3,
              nombre: "Martin Berasategui",
              bio: "Martín Berasategui Olazábal es un chef español que cuenta con diez estrellas Michelin",
              img: "assets/img/berazategui.jpg"
            },
            {
              id: 4,
              nombre: "Juan Maria Arzak",
              bio: "Es un cocinero español y uno de los más importantes y premiados cocineros del mundo",
              img: "assets/img/arzak.jpg"
            },
            {
              id: 5,
              nombre: "Eva Arguiñano",
              bio: "Es una cocinera y presentadora de televisión española. Su especialidad son los postres, siendo jefa de repostería del restaurante de su hermano, Karlos Arguiñano, en Zarauz.",
              img: "assets/img/eva.jpg"
            },
            {
              id: 6,
              nombre: "Carme Ruscalleda",
              bio: "En España es la cocinera con más estrellas de la Guía Michelín,​ y cuenta además con la máxima calificación (tres soles) de la Guía Campsa-Repsol. Su cocina está fundamentada en la tradición cocina catalana, pero dando siempre un toque de modernidad.",
              img: "assets/img/carme.jpg"
            }
    ]

    constructor(){
        console.log('Servicio listo para usarse');
    }

    getChefs():Chef[]{
        return this.chefs;
    }

    getChef(i:number){
      return this.chefs[i];
    }
}

export interface Chef{
    id:number;
    nombre:string;
    bio: string;
    img:string;
};