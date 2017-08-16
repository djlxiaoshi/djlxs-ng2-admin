/// <reference path="../../../../node_modules/@types/baidumap-web-sdk/index.d.ts" />
import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'

@Component({
  selector: 'app-maps',
  templateUrl: 'maps.component.html',
  styleUrls: ['maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
      var map = new BMap.Map('map');
      let point = new BMap.Point(121.491, 31.233)
      map.centerAndZoom(point, 11);
      let marker = new BMap.Marker(point);
      map.addOverlay(marker);
  }
}
