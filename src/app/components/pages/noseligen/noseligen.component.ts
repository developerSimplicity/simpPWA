import { Component, AfterViewInit,Inject,Injectable,OnDestroy  } from '@angular/core';
import {Butler} from '@app/services/butler.service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-noseligen',
  templateUrl: './noseligen.component.html',
  styleUrls: ['./noseligen.component.css']
})
@Injectable()
export class NoseligenComponent implements AfterViewInit , OnDestroy  {

  constructor(
  @Inject(DOCUMENT) 
   private document: Document,
    public _butler: Butler

    ) { }

  ngAfterViewInit(): void {
     this.document.body.classList.remove('bodybg-color');
    this._butler.route="four";
       this.document.body.classList.add('bodybg-color2');
  }
ngOnDestroy() {
    // remove the class form body tag
    this.document.body.classList.add('bodybg-color2');
  }

}
