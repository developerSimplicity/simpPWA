import { Component, AfterViewInit,Inject,Injectable,OnDestroy } from '@angular/core';
import {Butler} from '@app/services/butler.service';

import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-asisomos',
  templateUrl: './asisomos.component.html',
  styleUrls: ['./asisomos.component.css']
})
@Injectable()
export class AsisomosComponent implements AfterViewInit, OnDestroy  {

  constructor(
       @Inject(DOCUMENT) 
   private document: Document,
    public _butler: Butler
    ) { }

  ngAfterViewInit(): void {
    this._butler.route="two";
      this.document.body.classList.remove('bodybg-color');
      this.document.body.classList.add('bodybg-color2');

  }
ngOnDestroy() {
    // remove the class form body tag
    this.document.body.classList.add('bodybg-color2');
  }

}
