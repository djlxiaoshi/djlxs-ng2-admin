import { Component, OnInit, Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss']
})

@Injectable()
export class RouterComponent implements OnInit {
  flag = true;
  constructor(
    private _route: Router
  ) { }

  ngOnInit() {
  }

  test() {
    this._route.navigateByUrl('/tables')
  }

  changeFlag() {
    this.flag = !this.flag;
    console.log('flag', this.flag);
  }
}
