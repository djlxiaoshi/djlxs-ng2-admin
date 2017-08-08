import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: 'editor.component.html',
  styleUrls: ['editor.component.styl']
})
export class EditorComponent implements OnInit {
  constructor() {

  }
  ckeditorContent:string = `<p>My HTML</p>`;
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };
  ngOnInit() {
  }

}
