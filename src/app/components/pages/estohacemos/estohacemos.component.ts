import { Component, OnInit } from '@angular/core';
import {Butler} from '@app/services/butler.service';
@Component({
  selector: 'app-estohacemos',
  templateUrl: './estohacemos.component.html',
  styleUrls: ['./estohacemos.component.css']
})
export class EstohacemosComponent implements OnInit {

  constructor(
    public _butler: Butler

    ) { }

  ngOnInit(): void {
 this._butler.route="three";
  }

}
