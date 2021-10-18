import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  @Input()
  value!: string;

  constructor() { }

  ngOnInit(): void {
    console.log('Ngonint');
  }

  ngOnDestroy() {
    console.log('NgOnDestroy');

  }
  ngOnChanges() {
    console.log('NgOnChanges');
  }
  ngAfterContentInit() {
    console.log('NgAfterContentinit');
  }
  ngAfterContentChecked() {
    console.log('NgAfterContentChecked');
  }
  ngAfterViewChecked() {
    console.log('NgAfterViewChecked');
  }
  ngAfterViewInit() {
    console.log('NgAfterViewInit');
  }
  ngDoCheck() {
    console.log('NgDoCheck');
  }
}
