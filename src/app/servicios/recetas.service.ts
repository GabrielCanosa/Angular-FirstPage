import { Injectable } from '@angular/core'
@Injectable()
export class RecetasService{

    private recetas:Receta[] = [
            {
              id: 1,
              nombre: "Cocido madrileño",
              ingredientes: ["300 gr de garbanzos", "1 morcilla", "150 de tocino", "200 gr de chorizo", "2 patatas", "2 zanahorias"],
              img: "assets/img/cocido.jpg",
              preparacion: "Pon los garbanzos en un bol, cúbrelos con agua y mételos en el frigorífico. Déjalos a remojo durante toda la noche. Escúrrelos, colócalos en una red y resérvalos. Pon abundante agua en la olla (2 litros y medio), añade el morcillo, el tocino. Sazona, pon a calentar y cuando empiece a hervir, retira la espuma, introduce los garbanzos y retira la espuma de nuevo. Tapa y cuécelos durante 30 minutos (a partir de que comience a salir el vapor). Abre la olla y retira un poco del caldo a otra cazuela y ponlo a calentar. Agrega también el chorizo y la morcilla, sazona. Cuece todo con la tapa puesta durante 15 minutos. Pela las patatas y las zanahorias y agrégalas enteras a la olla de los garbanzos y cuece todo durante 10 minutos más. Sirve todo en una fuente grande. Lamina los ajos, fríelos en una sartén con un chorrito de aceite. Espolvorea con perejil picado. Riega el plato y sirve el cocido madrileño.",
              chef:"Jarl Gab"
            },
            {
                id: 2,
                nombre: "Fabada Asturiana",
                ingredientes: ["400 gr de fabes", "200 gr de panceta", "2 chorizos asturianos", "2 morcillas asturianas", "sal"],
                img: "assets/img/fabada.jpg",
                preparacion: "Lo primero que haremos será limpiar bien las fabes. Las revisamos bien de que estén todas perfectas, si encontramos alguna que está deteriorada la desechamos. Una vez limpias, las ponemos en remojo durante toda la noche. Al día siguiente, desde agua fría, ponemos a cocer las fabes en agua con sal. Deberemos desespumarlas hasta retirar todo. Una vez hayamos quitado toda la espuma que ha soltado, incorporamos el chorizo, la panceta y la morcilla. Volvemos a poner a fuego fuerte para que rompa a hervir. Ahora es momento de «asustarlas». Una vez rompa a hervir le cortamos la cocción añadiendo un vaso de agua fría. Esta operación la repetiremos 3 veces. Con esto nos aseguramos de que no se pelen las fabes. Dejamos cocinar unas 2 horas o 2 horas y media a fuego lento o 15 minutos en olla rápida. Os recomiendo hacerlo mejor en olla de barro a fuego lento, os quedarán perfectas.",
                chef:"Jarl Gab"
              },
              {
                id: 3,
                nombre: "Gambas al ajillo",
                ingredientes: ["500 gr de gambas", "5 dientes de ajo", "2 guindillas", "aceite de oliva", "sal"],
                img: "assets/img/gambasalajillo.jpg",
                preparacion: "Comenzamos pelando las gambas. Lo mejor para este plato es que utilicéis gambas blancas pequeñas, que son las que mejor se hacen. Cortamos los dientes de ajo en láminas. Aunque yo he utilizado unas 5 cabezas de ajo, podéis ir incorporando más cantidad de ajo si os gustan con más sabor. En una sartén echamos una buena cantidad de aceite de oliva, como veis en la foto. A continuación vamos a dorar las guindillas y los ajos a fuego suave para que no se quemen. Una vez que los ajos y las guindillas se han dorado, es el momento de echar las gambas que hemos pelado con un toque de sal. Freímos las gambas a fuego alto unos de forma que se hagan bien por todos los lados durante 2-3 minutos. Es importante que no os paséis de tiempo para que no queden demasiado secas. En el caso de que las gambas sean grandes sí que será necesario que las cocinéis durante más tiempo para que se hagan bien. Para servirlas, es muy típico utilizar una cazuelita de barro y, si queréis, podéis añadir un poquito de perejil. Recordad que se sirven muy calientes, casi recién salidas de la sartén.",
                chef:"Jarl Gab"
              },
              {
                id: 4,
                nombre: "Gazpacho andaluz",
                ingredientes: ["1/2 Kg de tomate maduro", "1 diente de ajo", "Aceite de oliva", "1 rebanada de pan blanco", "1/2 pimiento verde", "1/2 pepino", "4 cucharadas de vinagre de vino", "sal fina"],
                img: "assets/img/gazpacho.jpg",
                preparacion: "Escalda y pela los tomates e introduce en el vaso de la batidora, añade el pepino pelado y troceado, el pimiento, el ajo y el pan remojado en agua. Tritura durante unos segundos y añade la sal, el vinagre y el aceite probando para rectificar si fuera preciso. Pasa por chino a una sopera y deja enfriar durante una hora. Sirve el gazpacho andaluz en tazas individuales acompañando con una guarnición de dados de pan, de pepino, de cebolla, de tomate y de huevo duro",
                chef:"Jarl Gab"
              },
              {
                id: 5,
                nombre: "Jamón Ibérico",
                ingredientes: ["1 pata de jamón"],
                img: "assets/img/jamonserrano.jpg",
                preparacion: "Simplemente, disfruta de unos de los mas deliciosos manjares ;)",
                chef:"Jarl Gab"
              },
              {
                id: 6,
                nombre: "Paella",
                ingredientes: ["2 tazas de arroz", "4 tazas de caldo de gambas", "1/2 Kg de calamares", "1/2 Kg de gambas frescas", "1 puñado de conchas de mar (almejas y mejillones)", "1 cebolla", "1 tomate", "1/2 pimiento rojo", "2 dientes de ajo", "1/2 taza de guisantes", "1 ramo de hojas de perejil fresco", "aceite de oliva", "sal", "pimienta", "colorante amarillo o azafrán"],
                img: "assets/img/paella.jpg",
                preparacion: "Limpia y pela las gambas. Usa las conchas y cabeza para hacer caldo. Resérvalo. También limpia los calamares y pícalos en ruedas. Limpia también las conchas de mar con abundante agua para que suelten cualquier residuo de arena. En una paellera, ó sartén muy grande y profunda, sofríe en aceite de oliva, la cebolla, el ajo, pimiento y tomate picados en cuadritos pequeños. Agrégale un poco de pimienta y sal. En una paellera, ó sartén muy grande y profunda, sofríe en aceite de oliva, la cebolla, el ajo, pimiento y tomate picados en cuadritos pequeños. Agrégale un poco de pimienta y sal. Pon los calamares y luego las conchas de mar. Deja que se cocinen unos minutos. Verás que comienza a hacerse un caldo, esto está bien. Agrega las 2 tazas de arroz y revuelve para que se mezcle todo. Seguidamente ponle 4 tazas del caldo de gambas que hiciste anteriormente. Si no te alcanza, completa con agua. Revuelve bien. Agrega una cucharadita de colorante amarillo ó las hebras de azafrán y deja hervir por unos 3 minutos. Aun con líquido en la paellera, agrega los guisantes frescos, las gambas y el perejil previamente picado muy pequeñito. Chequea la sal y la pimienta y agrega de ser necesario. Deja cocinar hasta que esté casi seco el líquido. En este momento puedes ponerle unas tiras de pimiento para decorar y algunos langostinos con su concha. Baja el fuego y tapa. Deja cocinar por 15 minutos y prueba el grano. Si está listo retira del fuego y sirve tu paella de marisco con un chorro de aceite de oliva por encima para darle aun más sabor.",
                chef:"Jarl Gab"
              },
              {
                id: 7,
                nombre: "Pulpo a la gallega",
                ingredientes: ["1 pulpo de 2 a 3 kg", "1 kg de patatas gallegas", "sal gruesa", "pimentón dulce o picante (o mixto, depende del gusto de cada uno)", "aceite de oliva virgen extra", "agua"],
                img: "assets/img/pulpoalagallega.jpg",
                preparacion: "Es muy importante ablandar el pulpo antes de cocinarlo, he visto como lo hacían golpeándolo contra la piedra en la Isla de Ons. Pero por suerte si lo congelamos el resultado es prácticamente el mismo. Ayuda a que la carne quede más tierna. Así que lo único que debemos hacer es congelarlo si lo hemos comprado fresco o comprarlo directamente congelado. Sacamos el pulpo un día antes del congelador y lo pasamos al frigorífico para que se descongele. Es importante hacerlo en una cazuela o un bol grande pues va a soltar mucho líquido y puede desbordar. A la hora de cocinar lo pasamos un poco por agua fría para quitar posibles impurezas. Ponemos una cazuela (la más grande que tengamos) al fuego con agua, no añadimos sal pues el pulpo se sala al final, en la presentación. Cuando rompa a hervir añadimos el pulpo, lo cogemos por la cabeza y “lo asustamos”, esta técnica consiste en meter y sacar el pulpo 3 veces de la cazuela para conseguir que el pulpo se quede tieso y no se le caiga la piel durante la cocción. Cocemos el pulpo durante unos 35-40 a fuego medio dependiendo del tamaño (lo normal es cocer un pulpo de 1,8 kg – 2 kg, con 30-35 es suficiente). En este caso, era un pulpo de 3 kilos, con lo que tuvimos que cocerlo desde que empezó a hervir unos 40 minutos. Hay que pincharlo de vez en cuando para ver como está de duro. La primera vez que lo cocinéis os costará cogerle el punto pero luego os saldrá de perlas. Mientras está cociendo, pelamos, lavamos y troceamos las patatas a la mitad. Reservamos. Cuando acabemos de cocer el pulpo lo dejamos reposar unos minutos y luego lo sacamos a una fuente. En la misma agua echamos las patatas y cocemos durante 15 minutos. Si no quieres que cojan el color rosado puedes hacerlas en otra cazuela. Eso depende de cada uno, a mí me gustan con el sabor al pulpo. Cortamos el pulpo con unas tijeras de cocina, las patas en trozos de 1 cm de grosor y la cabeza en trozos pequeños. Lo servimos en plato de madera con una base de patatas. Salamos con sal gorda, espolvoreamos con el pimentón (picante o dulce) y rociamos con un poco de aceite de oliva virgen extra. A mí me gusta aliñarlo también con un poco de agua de la cocción.",
                chef:"Jarl Gab"
              },
              {
                id: 8,
                nombre: "Rabo de Toro",
                ingredientes: ["2 rabos de toro o de vaca", "1 botella de vino tinto", "2 cebollas", "3 zanahorias", "1 puerro", "1 cabeza de ajo", "100 g de harina", "Chocolate negro", "2 mini mazorcas de maíz"],
                img: "assets/img/rabodetoro.jpg",
                preparacion: "Poner a macerar los trozos de rabo de toro en vino tinto y las verduras durante una noche. Retirar de la marinada los trozos de rabo, enharinarlos y dorarlos en una olla con aceite de oliva. Cortar las verduras que también se han macerado y añadirlas a la olla donde se están dorando los trozos de rabo. Añadir el vino de la maceración y agua hasta cubrir. Añadir el tomillo y el romero y dejar cocer tapado durante tres horas a fuego medio. Cuando han pasado las 3 horas, sacar los trozos de rabo de la olla, deshuesarlos y reservarlos. Colar el caldo y ponerlo a reducir en la olla. Cortar las zanahorias y las mini mazorcas de maíz y añadirlas al cazo donde se está reduciendo la salsa. Dejar hervir durante entre cinco y diez minutos hasta que quede densa. Con la salsa ya reducida, añadir un poco de chocolate y el rabo deshuesado. Emplatar en plato llano con abundante salsa.",
                chef:"Jarl Gab"
              },
              {
                id: 9,
                nombre: "Tortilla española",
                ingredientes: ["6 huevos","1 cebolla","2 vasos de aceite de oliva","1 hoja de perejil","3 patatas","1 pimiento verde", "sal"],
                img: "assets/img/tortilla.jpg",
                preparacion: "Pela y pica la cebolla en dados medianos. Limpia el pimiento verde, retírale el tallo y las pepitas y córtalo en dados. Si las patatas estuvieran sucias, pásalas por agua. Pélalas, córtalas por la mitad a lo largo y después corta cada trozo en medias lunas finas de 1/2 centímetros. Introduce todo en la sartén, sazona a tu gusto y fríe a fuego suave durante 25-30 minutos. Retira la fritada y escúrrela. Pasa el aceite a un recipiente y resérvalo. Limpia la sartén con papel absorbente de cocina. Casca los huevos, colócalos en un recipiente grande y bátelos. Sálalos a tu gusto, agrega la fritada de patatas, cebolla y pimiento y mezcla bien. Coloca la sartén nuevamente en el fuego, agrega un chorrito del aceite reservado y agrega la mezcla. Remueve un poco con una cuchara de madera y espera (20 segundos) a que empiece a cuajarse. Separa los bordes, cubre la sartén con un plato de mayor diámetro que la sartén y dale la vuelta. Échala de nuevo para que cuaje por el otro lado.",
                chef:"Jarl Gab"
              }
    ]

    constructor(){
        console.log('Servicio listo para usarse');
    }

    getRecetas():Receta[]{
        return this.recetas;
    }

    getReceta(i:number){
      return this.recetas[i];
    }
}

export interface Receta{
    id:number;
    nombre:string;
    ingredientes: string[];
    img:string;
    preparacion:string;
    chef:string;
};