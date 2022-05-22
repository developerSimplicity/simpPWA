import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ScriptService } from '@app/services/script.service';

import { ScriptStore } from '@app/services/script.store';

import { SwiperOptions } from 'swiper';
import {Butler} from '@app/services/butler.service';
import { BikersService } from '@app/services/';
import {Map, Popup,Marker} from 'mapbox-gl';
import { MapService } from '@app/services/map.service';
import { Feature } from '@app/interfaces/places';

interface Product {
  id: number;
  oncart: boolean;
  quant: number;
  cat: string;
  name: string;
  img: string;
  costPrice: number;
  perc: number;
  presentation: string;
}

const PRODUCTS: Product[] = [
  {
     id: 1,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Tomates',
    img: 'assets/products/tomates.jpg',
    costPrice: 10,
    perc: 30,
    presentation:'Kg'
  },
  {
    id: 2,
     oncart: false,
     quant:0,
    cat:'frutas',
    name: 'Cambur amarillo',
    img: 'assets/products/bananos.jpg',
    costPrice: 2,
    perc: 30,
    presentation:'Kg'
  },
   {
     id: 3,
     oncart: false,
     quant:0,
     cat:'carnes',
    name: 'Pata de Res',
    img: 'assets/products/patasres.jpg',
    costPrice: 15,
    perc: 30,
    presentation:'Kg'
  },
   {
     id: 4,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Auyama',
    img: 'assets/products/auyama.jpg',
    costPrice: 3,
    perc: 30,
    presentation:'Kg'
  },
   {
     id: 5,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Cafe',
    img: 'assets/products/cafe.jpg',
    costPrice: 8.50,
    perc: 30,
    presentation:'250g'
  },
   {
     id: 6,
     oncart: false,
     quant:0,
     cat:'cuidado',
    name: 'papel higienico',
    img: 'assets/products/papelhigienico.jpg',
    costPrice: 15,
    perc: 30,
    presentation:'6 rollos'
  },

   {
     id: 7,
     oncart: false,
     quant:0,
     cat:'snacks',
    name: 'Oreo',
    img: 'assets/products/oreo.jpg',
    costPrice: 10,
    perc: 30,
    presentation:'paquete'
  },

   {
     id: 8,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Naranjas',
    img: 'assets/products/naranjas.jpg',
    costPrice: 6,
    perc: 30,
    presentation:'kg'
  },

   {
     id: 9,
     oncart: false,
     quant:0,
     cat:'snacks',
    name: 'Chocolate',
    img: 'assets/products/chocolate.jpg',
    costPrice: 8,
    perc: 30,
    presentation:'Und P.'
  },

   {
     id: 10,
     oncart: false,
     quant:0,
     cat:'limpieza',
    name: 'Jabon lava platos',
    img: 'assets/products/lavalosa.jpg',
    costPrice: 7,
    perc: 30,
    presentation:'450 g'
  },

   {
     id: 11,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Lentejas',
    img: 'assets/products/lentejas.jpg',
    costPrice: 12,
    perc: 30,
    presentation:'kg'
  },

   {
     id: 12,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Leche en polvo',
    img: 'assets/products/lechelacampesina.jpg',
    costPrice: 30,
    perc: 30,
    presentation:'900 g'
  },

   {
     id: 13,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Mango',
    img: 'assets/products/mangos.jpg',
    costPrice: 6,
    perc: 30,
    presentation:'kg'
  },

   {
     id: 14,
     oncart: false,
     quant:0,
     cat:'snacks',
    name: 'Trululu',
    img: 'assets/products/trululus.jpg',
    costPrice: 5,
    perc: 30,
    presentation:'Paquete'
  },

   {
     id: 15,
     oncart: false,
     quant:0,
     cat:'carnes',
    name: 'Costilla de res',
    img: 'assets/products/costilla.jpg',
    costPrice: 15,
    perc: 30,
    presentation:'kg'
  },

   {
     id: 16,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Avena',
    img: 'assets/products/avena.jpg',
    costPrice: 12,
    perc: 30,
    presentation:'500 g'
  },

   {
     id: 17,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Aceite Mazeite',
    img: 'assets/products/aceitemazeite.jpg',
    costPrice: 25,
    perc: 30,
    presentation:'lts'
  },

   {
     id: 18,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Aguacate',
    img: 'assets/products/aguacate.jpg',
    costPrice: 6,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 19,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Aji dulce',
    img: 'assets/products/ajisdulce.jpg',
    costPrice: 5,
    perc: 30,
    presentation:'250 g'
  },
  {
     id: 20,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Ajo',
    img: 'assets/products/ajo.jpg',
    costPrice: 12 ,
    perc: 30,
    presentation:'250 g'
  },
  {
     id: 21,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Ajo Porro',
    img: 'assets/products/ajoporro.jpg',
    costPrice: 6,
    perc: 30,
    presentation:'500 g'
  },
  {
     id: 22,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Apio españa',
    img: 'assets/products/apioespaña.jpg',
    costPrice: 6,
    perc: 30,
    presentation:'500 g'
  },
  {
     id: 23,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Arroz mary',
    img: 'assets/products/arrozmary.jpg',
    costPrice: 5,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 24,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Arvejas',
    img: 'assets/products/arvejas.jpg',
    costPrice: 12,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 25,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Azucar',
    img: 'assets/products/azucar.jpg',
    costPrice: 7,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 26,
     oncart: false,
     quant:0,
     cat:'carnes',
    name: 'Carne Bistek',
    img: 'assets/products/bistec.jpg',
    costPrice: 26,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 27,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Cambur Verde',
    img: 'assets/products/cambusverde.jpg',
    costPrice: 2,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 28,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Caraotas',
    img: 'assets/products/caraotas.jpg',
    costPrice: 10,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 29,
     oncart: false,
     quant:0,
     cat:'carnes',
    name: 'Lagarto molido',
    img: 'assets/products/carnemolida.jpg',
    costPrice: 25,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 30,
     oncart: false,
     quant:0,
     cat:'carnes',
    name: 'Lagarto en trozos',
    img: 'assets/products/carnetrosos.jpg',
    costPrice: 25,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 31,
     oncart: false,
     quant:0,
     cat:'bebidas',
    name: 'Sangria',
    img: 'assets/products/carorña.jpg',
    costPrice: 30,
    perc: 30,
    presentation:'lts'
  },
  {
     id: 32,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Cebolla',
    img: 'assets/products/cebollas.jpg',
    costPrice: 7,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 33,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Cebollin',
    img: 'assets/products/cebollin.jpg',
    costPrice: 5,
    perc: 30,
    presentation:'500 g'
  },
  {
     id: 34,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Cereal',
    img: 'assets/products/cereal.jpg',
    costPrice: 15,
    perc: 30,
    presentation:'350 g'
  },
  {
     id: 35,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Cilantro',
    img: 'assets/products/cilantro.jpg',
    costPrice: 5,
    perc: 30,
    presentation:'300 g'
  },
  {
     id: 36,
     oncart: false,
     quant:0,
     cat:'limpieza',
    name: 'Cloro',
    img: 'assets/products/cloro.jpg',
    costPrice: 3,
    perc: 30,
    presentation:'500 ml'
  },
  {
     id: 37,
     oncart: false,
     quant:0,
     cat:'bebidas',
    name: 'Coca Cola',
    img: 'assets/products/cocacola.jpg',
    costPrice: 15,
    perc: 30,
    presentation:'2.5 lts'
  },
  {
     id: 38,
     oncart: false,
     quant:0,
     cat:'snacks',
    name: 'cocosete',
    img: 'assets/products/cocosete.jpg',
    costPrice: 8,
    perc: 30,
    presentation:'Und.'
  },
  {
     id: 39,
     oncart: false,
     quant:0,
     cat:'cuidado',
    name: 'Crema dental',
    img: 'assets/products/cremadentalcolgate.jpg',
    costPrice: 8,
    perc: 30,
    presentation:'Und. P'
  },
  {
     id: 40,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Harina de trigo',
    img: 'assets/products/harinaleudante.jpg',
    costPrice: 8,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 41,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Harina Pan',
    img: 'assets/products/harinapan.jpg',
    costPrice: 7,
    perc: 30,
    presentation:'kg'
  },

  {
     id: 42,
     oncart: false,
     quant:0,
     cat:'lacteos',
    name: 'Huevos',
    img: 'assets/products/huevos.jpg',
    costPrice: 13,
    perc: 30,
    presentation:'15 Und'
  },
  {
     id: 43,
     oncart: false,
     quant:0,
     cat:'limpieza',
    name: 'Jabon azul',
    img: 'assets/products/jabolrombo.jpg',
    costPrice: 3.5,
    perc: 30,
    presentation:'Und'
  },
  {
     id: 44,
     oncart: false,
     quant:0,
     cat:'limpieza',
    name: 'Jabon azul',
    img: 'assets/products/jabonlasllaves.jpg',
    costPrice: 6,
    perc: 30,
    presentation:'Und'
  },
  {
     id: 45,
     oncart: false,
     quant:0,
     cat:'limpieza',
    name: 'Jabon en polvo',
    img: 'assets/products/jabonpolvollaves.jpg',
    costPrice: 25,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 46,
     oncart: false,
     quant:0,
     cat:'limpieza',
    name: 'Jabon en polvo',
    img: 'assets/products/jabonpolvoultrex.jpg',
    costPrice: 10,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 47,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Leche condensada',
    img: 'assets/products/lechecondensada.jpg',
    costPrice: 18,
    perc: 30,
    presentation:'Und'
  },

  {
     id: 48,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Lechosa',
    img: 'assets/products/lechosa.jpg',
    costPrice: 5,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 49,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Limones',
    img: 'assets/products/limon.jpg',
    costPrice: 10,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 50,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Margarina mavesa',
    img: 'assets/products/margarina.jpg',
    costPrice: 15,
    perc: 30,
    presentation:'500 g'
  },
  {
     id: 51,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Mayonesa mavesa  ',
    img: 'assets/products/mayonesa.jpg',
    costPrice: 18,
    perc: 30,
    presentation:'445 g'
  },
  {
     id: 52,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Papa',
    img: 'assets/products/papas.jpg',
    costPrice: 6,
    perc: 30,
    presentation:'kg  '
  },
  {
     id: 53,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Parchita',
    img: 'assets/products/parchita.jpg',
    costPrice: 8,
    perc: 30,
    presentation:'Kg'
  },{
     id: 54,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Pasta primor larga',
    img: 'assets/products/pastaprimorlarga.jpg',
    costPrice: 8,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 55,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Pasta primor pluma',
    img: 'assets/products/pastaprimorpluma.jpg',
    costPrice: 8,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 56,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Pepino',
    img: 'assets/products/pepino.jpg',
    costPrice: 5,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 57,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Pimenton',
    img: 'assets/products/pimenton.jpg',
    costPrice: 15,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 58,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Platano verde',
    img: 'assets/products/platanosverdes.jpg',
    costPrice: 5,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 59,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Platano amarillo',
    img: 'assets/products/amarillo.jpg',
    costPrice: 5,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 60,
     oncart: false,
     quant:0,
     cat:'carnes',
    name: 'Pollo',
    img: 'assets/products/pollo.jpg',
    costPrice: 18,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 61,
     oncart: false,
     quant:0,
     cat:'lacteos',
    name: 'Queso blanco',
    img: 'assets/products/quesoblanco.jpg',
    costPrice: 26,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 62,
     oncart: false,
     quant:0,
     cat:'lacteos',
    name: 'Queso ahumado',
    img: 'assets/products/quesoahumado.jpg',
    costPrice: 28,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 63,
     oncart: false,
     quant:0,
     cat:'bebidas',
    name: 'Ron Casique',
    img: 'assets/products/roncasique.jpg',
    costPrice: 50,
    perc: 30,
    presentation:'lts'
  },
  {
     id: 64,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Pasta ronco larga',
    img: 'assets/products/roncolarga.jpg',
    costPrice: 10,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 65,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Pasta ronco pluma',
    img: 'assets/products/roncopluma.jpg',
    costPrice: 10,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 66,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Galletas saltitacos',
    img: 'assets/products/saltitacos.jpg',
    costPrice: 15,
    perc: 30,
    presentation:'7 tacos'
  },
  {
     id: 67,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Sal',
    img: 'assets/products/salcristal.jpg',
    costPrice: 3,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 68,
     oncart: false,
     quant:0,
     cat:'snacks',
    name: 'Samba',
    img: 'assets/products/samba.jpg',
    costPrice: 8,
    perc: 30,
    presentation:'Und.'
  },
  {
     id: 69,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Yuca',
    img: 'assets/products/yucas.jpg',
    costPrice: 4,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 70,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Piña',
    img: 'assets/products/piña.jpg',
    costPrice: 6,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 71,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Apio',
    img: 'assets/products/apio.jpg',
    costPrice: 6,
    perc: 30,
    presentation:'kg'
  },
   {
     id: 72,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Mora',
    img: 'assets/products/mora.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
   {
     id: 73,
     oncart: false,
     quant:0,
     cat:'bebidas',
    name: 'Pepsi',
    img: 'assets/products/pepsi.jpg',
    costPrice: 15,
    perc: 30,
    presentation:'2.5 lts'
  },
   {
     id: 74,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Zanahorias',
    img: 'assets/products/zanahorias.jpg',
    costPrice: 4,
    perc: 30,
    presentation:'kg'
  },
   {
     id: 75,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Durazno',
    img: 'assets/products/duraznos.jpg',
    costPrice: 18,
    perc: 30,
    presentation:'kg'
  },
   {
     id: 76,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Manzanas',
    img: 'assets/products/manzana.jpg',
    costPrice: 10,
    perc: 30,
    presentation:'3 Und'
  },
   {
     id: 77,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Gift 10$',
    img: 'assets/products/gif1.jpg',
    costPrice: 50,
    perc: 0,
    presentation:'Und'
  },
   {
     id: 78,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Gift 25$',
    img: 'assets/products/gif2.jpg',
    costPrice: 125,
    perc: 0,
    presentation:'Und'
  },
  {
     id: 79,
     oncart: false,
     quant:0,
     cat:'viveres',
    name: 'Gift 50$',
    img: 'assets/products/gif3.jpg',
    costPrice: 250,
    perc: 0,
    presentation:'Und'
  },
  {
     id: 80,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Acelga',
    img: 'assets/products/acelga.jpg',
    costPrice: 3,
    perc: 30,
    presentation:'250 g'
  },
  {
     id: 81,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Espinaca',
    img: 'assets/products/espinaa.jpg',
    costPrice: 4,
    perc: 30,
    presentation:'250 g'
  },
  {
     id: 82,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Berenjenas',
    img: 'assets/products/berenjena.jpg',
    costPrice: 6,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 83,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Calabacin',
    img: 'assets/products/calabacin.jpg',
    costPrice: 6,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 84,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Brocoli',
    img: 'assets/products/brocoli.jpg',
    costPrice: 8,
    perc: 30,
    presentation:'Und'
  },
  {
     id: 85,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Repollo',
    img: 'assets/products/repollo.jpg',
    costPrice: 6,
    perc: 30,
    presentation:'Und'
  },
  {
     id: 86,
     oncart: false,
     quant:0,
     cat:'frutas',
    name: 'Lechuga',
    img: 'assets/products/lechuga.jpg',
    costPrice: 6,
    perc: 30,
    presentation:'Und'
  }
];

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {

  private debounceTimer?:NodeJS.Timeout;
@ViewChild('mapDiv')mapDivElement!:ElementRef
@ViewChild('mysearch')myserachElement!:ElementRef

link:string=""; 
  constructor(
    private bikersService:BikersService,

    public script:ScriptService,
    private mapService:MapService,
    public _butler: Butler
  ) { } 

  config: SwiperOptions = {

    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 5,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: false,
    spaceBetween: 5,
    navigation: false
  };  
  
public toCart(i:number){
 this._butler.totalItems=this._butler.totalItems+1;
      this._butler.cart[i].oncart=true;
       this.calculate();

}public minus(i:number){
  if(this._butler.cart[i].quant>0){
      this._butler.cart[i].quant=this._butler.cart[i].quant-1;
      
   }
   
}
public plus(i:number){
   if(this._butler.cart[i].quant>=0){
      this._butler.cart[i].quant=this._butler.cart[i].quant+1;
     
   }
}

public details(b:any){
  let a =b;
  if (a==1){this.link="assets/assets/img/user4.jpg";}
  if (a==2){this.link="assets/assets/img/user10.jpg";}
  if (a==3){this.link="assets/assets/img/user40.jpg";}
  if (a==4){this.link="assets/assets/img/user2.jpg";}
  if (a==5){this.link="assets/assets/img/user20.jpg";}
  if (a==6){this.link="assets/assets/img/user3.jpg";}
if(!this._butler.details){
    this._butler.details=true;
    return
  }else{
    this._butler.details=false;
  }
}

focusRemove(){
  this.myserachElement.nativeElement.blur();
}
public calculate(){
  this.total=0;
  for(let i=0;i<this._butler.cart.length;i++){
    this.total=this.total+(this._butler.cart[i].quant*((this._butler.cart[i].costPrice)+(this._butler.cart[i].costPrice*this._butler.cart[i].perc/100))/this.precioDolar);
   this._butler.total=this.total;
  }
}
total=0;

  ngAfterViewInit(): void {

    this.script.load(
'regenerator',
'wp-polyfill',
 'barba',
'bodymovin',
'gsap',
'scrollmagic',
'libs',
'main'
)
      .then(data => {console.log('script loaded ', data);}).catch(error => console.log(error));
   
   setTimeout(() => {
      this._butler.cart= this.products;
 
    }, 1000);

  

  }
precioDolar= 5;
currency = "USD";
  products = PRODUCTS;
}
