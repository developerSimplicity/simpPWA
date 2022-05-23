import { Component, AfterViewInit,Inject,Injectable } from '@angular/core';
import {Butler} from '@app/services/butler.service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-estohacemos',
  templateUrl: './estohacemos.component.html',
  styleUrls: ['./estohacemos.component.css']
})
@Injectable()
export class EstohacemosComponent implements AfterViewInit  {

  constructor(
           @Inject(DOCUMENT) 
   private document: Document,
    public _butler: Butler

    ) { }

  ngAfterViewInit (): void {
     this.document.body.classList.remove('bodybg-color');
 this._butler.route="three";
       this.document.body.classList.add('bodybg-color3');
  }

}
