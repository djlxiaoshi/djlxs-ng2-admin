import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.styl']
})
export class RegisterComponent implements OnInit {

  items = [
  {
    label: '主页',
    icon: 'fa-file-o',
    routerLink: ['home']
  },
  {
    label: 'Editor',
    icon: 'fa-edit',
    routerLink: 'component'
  }]
  constructor() { }

  ngOnInit() {
  }

}
