import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  name : string;
  companyName : string;
  url : string;

  constructor(){
    this.name = 'Mohan';
    this.companyName = 'DotNetTricks'
    this.url = 'http://www.dotnettricks.com'
  }
  share() {
    window.alert('The product has been shared!');
  }

  abc(){
    alert('HI !' + this.name);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/