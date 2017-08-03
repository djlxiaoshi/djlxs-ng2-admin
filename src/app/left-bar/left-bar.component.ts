import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.styl']
})
export class LeftBarComponent implements OnInit {

  constructor() { }

  private items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'fa-file-o',
        items: [
          { label: 'New', icon: 'fa-plus'},
          {label: 'Open'},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Edit',
        icon: 'fa-edit',
        items: [
          {label: 'Undo', icon: 'fa-mail-forward'},
          {label: 'Redo', icon: 'fa-mail-reply'}
        ]
      },
      {
        label: 'Help',
        icon: 'fa-question',
        items: [
          { label: 'Contents' },
          { label: 'Search', icon: 'fa-search'}
        ]
      },
      {
        label: 'Actions',
        icon: 'fa-gear',
        items: [
          { label: 'Edit', icon: 'fa-refresh'},
          { label: 'Other', icon: 'fa-phone'}
        ]
      }
    ];
  }

}
