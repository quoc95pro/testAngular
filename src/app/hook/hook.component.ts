import { Component, OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  @Input('name') name: string;
  @Input('comment') comment: string;

  constructor() { }

  

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
    console.log('Changes', changes);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnInit() { 
    console.log('ngOnInit');
   }

}
