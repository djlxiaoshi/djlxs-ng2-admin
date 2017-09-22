
import {
  Component, OnInit, Injector, Inject, Injectable, ReflectiveInjector, InjectionToken,
  Optional
} from '@angular/core';
import {DependenceComponent} from './dependence.component';
const MyToken = 45678;
let injector = ReflectiveInjector.resolveAndCreate([
  {provide: MyToken, useValue: 12345},
  DependenceComponent
]);

const DJLXSToken = new InjectionToken('DJLXS');

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  providers: [{provide: DJLXSToken, useValue: 11111}, DependenceComponent]
})


@Injectable()
export class ServiceComponent implements OnInit {



  constructor(
    private dependenceComponent: DependenceComponent,
    @Optional() private optionalTest: number
  ) {
    let dependence1 = injector.get(DependenceComponent);
    let dependence2 = injector.get(DependenceComponent);
    console.log(injector.get(MyToken));
    console.log('this.dependenceComponent === dependence1', this.dependenceComponent)
    console.log('dependence1 === dependence2', dependence1 === dependence2);
    console.log('this.dependence instanceof DependenceComponent', dependence1 instanceof DependenceComponent);
  }



  ngOnInit() {

  }

}
