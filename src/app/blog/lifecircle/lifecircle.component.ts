import {
  Component, OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit,
  AfterContentChecked, OnDestroy, SimpleChanges, Input
} from '@angular/core';

@Component({
  selector: 'app-lifecircle',
  templateUrl: './lifecircle.component.html',
  styleUrls: ['./lifecircle.component.scss']
})
export class LifecircleComponent implements OnChanges,OnInit, DoCheck, AfterContentInit, AfterContentChecked ,AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() obj;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes)
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

}
