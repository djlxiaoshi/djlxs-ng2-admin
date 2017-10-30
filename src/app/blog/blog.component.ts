import {Map} from 'immutable'

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
   obj;
  flag = true;

  constructor() { }
  ngOnInit() {
    this.obj = Map({name: 'djlxs', habits: {item: '羽毛球'}})
  }

  changeObj() {
    this.obj = this.obj.set('name', 'djl');
  };
}
