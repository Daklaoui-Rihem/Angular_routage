import { Component } from '@angular/core';
import { CATS } from '../mock-cats';
import { Cat } from '../cat';
import * as _ from 'lodash';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.css'  
})
export class CatsComponent {
  cats = CATS;
  showDetails!: boolean;
  cat!: Cat;

  getCatById(id: number) {
    const index = _.findIndex(this.cats, (c: Cat) => c.id === id);
    this.cat = this.cats[index];
    this.showDetails = true;
    console.log(this.cat);
  }
  
}
