import { Component, OnInit, OnDestroy, OnChanges, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lifecyclehooks';
  show :boolean= false;
  value: string='rahu';
  constructor() { }

  ngOnInit() {
   
  }
  click()
  {
    this.show=!this.show;
  }
}
