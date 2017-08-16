import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-left-bar',
  templateUrl: 'left-bar.component.html',
  styleUrls: ['left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {

  constructor() { }

  private items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: '主页',
        icon: 'fa-file-o',
        routerLink: ['/home']
      },
      {
        label: 'Editor',
        icon: 'fa-edit',
        routerLink: ['component']
      },
      {
        label: 'E-Charts',
        icon: 'fa-question',
        routerLink: ['charts']
      },
      {
        label: 'Tables',
        icon: 'fa-table',
        routerLink: ['tables']
      },
      {
        label: 'Maps',
        icon: 'fa-map-marker',
        routerLink: ['maps']
      },
      {
        label: 'Forms',
        icon: 'fa-check-square-o',
        routerLink: ['forms']
      },
      {
        label: 'User',
        icon: 'fa-map-marker',
        items: [
          {label: 'Login', icon: 'fa-map-marker', routerLink: ['user/login']},
          {label: 'Register', icon: 'fa-map-marker', routerLink: ['user/register']}
        ]
      }
    ];
  }

}
