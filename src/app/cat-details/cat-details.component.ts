import { Component, Inject, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {CATS} from '../mock-cats';
import{Cat} from '../cat';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrl: './cat-details.component.css' 
})

export class CatDetailsComponent implements OnInit{
  constructor(private route: ActivatedRoute) {
  }

  cats = CATS;
  @Input() cat!: Cat;
 
  ngOnInit() {
    
    const idFromRoute = Number(this.route.snapshot.paramMap.get('id')) || 0;
    this.getCatById(idFromRoute);
    }
  
  getCatById(id:number) {
    let index = _.findIndex(this.cats, (c: Cat) => {
    return c.id === id
    });
    this.cat = this.cats[index];
    console.log(this.cat);
    }
}
