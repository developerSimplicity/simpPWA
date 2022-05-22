import { Component,OnInit } from '@angular/core';
import { BikersService } from './services';
import { Butler } from './services/butler.service';
import { ScriptService } from './services/script.service';
import { Router } from '@angular/router';
//declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'simplicity';
  constructor(
    public script:ScriptService,
    public bikersScript:BikersService,
  public router:Router,
    public _butler:Butler
  ){}
  public  goRoute(r:string){
    if(r==="one"){  this.router.navigate(['/home']); this._butler.route="one";this._butler.backBlack=true;}
    if(r==="two"){  this.router.navigate(['/asisomos']);this._butler.route="two";this._butler.backBlack=false;}
    if(r==="three"){  this.router.navigate(['/estohacemos']);this._butler.route="three";this._butler.backBlack=false;}
  }

  ngOnInit(): void {
    this._butler.route="one";
    // this.bikersScript.getUserLocation();
    // this.script.load(
    //   'jquery',
    //   'popper',
    //   'bootstrap-5',
    //   'cookie',
    //   'swiper',
    //   'pwa-services',
    //   'nouislider',
    //   'main',
    //   'color-scheme',
    //   'app')
    //   .then(data => {console.log('script loaded ', data);}).catch(error => console.log(error));
    
  }
}
