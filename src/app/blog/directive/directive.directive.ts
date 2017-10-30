import { Directive, TemplateRef, ViewContainerRef, Input, ViewChild , AfterViewInit} from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class DirectiveDirective {

  @ViewChild('tmpl') tmpl: TemplateRef<any>;
  @ViewChild('tmpl', { read: ViewContainerRef }) tplRef: ViewContainerRef;


  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input()
  set unless(value) {
    if (value) {
      this.tplRef.clear()
    } else {
      this.tplRef.createEmbeddedView(this.tmpl)
    }
  };
}
