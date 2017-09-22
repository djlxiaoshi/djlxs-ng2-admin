
import { Component, OnInit, Injector, Inject, Injectable, ReflectiveInjector } from '@angular/core';


@Injectable()
export class DependenceComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {

  }

  sayHello () {
    console.log('hello world');
  }

}
