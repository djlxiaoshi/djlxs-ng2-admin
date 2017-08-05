import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'
/* eslint-disable */

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.styl']
})
export class MapsComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
    function initialize() {
      // tslint:disable-next-line
      var mp = new BMap.Map('map'); // tslint:disable-line
      // tslint:disable-next-line
      mp.centerAndZoom(new BMap.Point(121.491, 31.233), 11); // tslint:disable-line


    }

    function loadScript() {
      var script = document.createElement("script");
      script.src = "http://api.map.baidu.com/api?v=2.0&ak=AH5Lquy3qZTVX9a3FFVCItMd&callback=initialize";//此为v2.0版本的引用方式
      // http://api.map.baidu.com/api?v=1.4&ak=您的密钥&callback=initialize"; //此为v1.4版本及以前版本的引用方式
      document.body.appendChild(script);
    }

    window.onload = loadScript;
  }

}
