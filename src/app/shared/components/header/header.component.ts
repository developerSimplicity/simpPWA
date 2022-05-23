import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Butler } from '@app/services/butler.service';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  link:string="";
  constructor(
    public _butler:Butler,
    public script:ScriptService,
    public router:Router
  ) { }
 currency = "USD";
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
//     public  goRoute(r:string){
//     if(r==="one"){  this.router.navigate(['/home']); this._butler.route="one";this._butler.backBlack=true;
// this._butler.one=true;
// this._butler.two=false;
// this._butler.three=false;
// this._butler.four=false;
//   }
 
//   }

    public  goRoute(r:string){
    if(r==="one"){  this.router.navigate(['/home']); this._butler.route="one";this._butler.backBlack=true;
this._butler.one=true;
this._butler.two=false;
this._butler.three=false;
this._butler.five=false;
this._butler.four=false;
  }
    if(r==="two"){  this.router.navigate(['/asisomos']);this._butler.route="two";this._butler.backBlack=false;
  this._butler.one=false;
this._butler.two=true;
this._butler.four=false;
this._butler.five=false;
this._butler.three=false;}
    if(r==="three"){  this.router.navigate(['/estohacemos']);this._butler.route="three";this._butler.backBlack=false;
this._butler.one=false;
this._butler.two=false;
this._butler.three=true;
this._butler.five=false;
this._butler.four=false;

  }
    if(r==="four"){  this.router.navigate(['/noseligen']);this._butler.route="four";this._butler.backBlack=false;
this._butler.one=false;
this._butler.two=false;
this._butler.three=false;
this._butler.five=false;
this._butler.four=true;
  }
    if(r==="five"){  this.router.navigate(['/projects']);this._butler.route="five";this._butler.backBlack=false;
this._butler.one=false;
this._butler.two=false;
this._butler.three=false;
this._butler.four=false;
this._butler.five=true;
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
  ngAfterViewInit(): void {
      }
 

}
