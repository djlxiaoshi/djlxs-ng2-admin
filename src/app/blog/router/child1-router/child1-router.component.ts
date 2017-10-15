import { Component, OnInit, Injectable } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-child1-router',
  templateUrl: './child1-router.component.html',
  styleUrls: ['./child1-router.component.scss'],
  providers: []
})

@Injectable()
export class Child1RouterComponent implements OnInit {

  id = 'djlxs';
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('query', this.activatedRoute.snapshot.queryParams);

    this.activatedRoute.queryParams.subscribe(params => {
      console.log('路由携带数据', params);
    });

    this.activatedRoute.data.subscribe(params => {
      console.log('预加载数据', params);
    });

    console.log('到底谁快');
  }

}
