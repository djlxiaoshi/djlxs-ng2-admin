import { Component, OnInit } from '@angular/core';

import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-forms',
  templateUrl: 'forms.component.html',
  styleUrls: ['forms.component.styl']
})
export class FormsComponent implements OnInit {

  constructor() { }

  cities: SelectItem[];

  selectedCity: string;
  ngOnInit() {
    this.cities = [];
    this.cities.push({label:'Select City', value:null});
    this.cities.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
    this.cities.push({label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}});
    this.cities.push({label:'London', value:{id:3, name: 'London', code: 'LDN'}});
    this.cities.push({label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}});
    this.cities.push({label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}});
  }
}
