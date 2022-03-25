import { Component, OnInit } from '@angular/core';
import { Singleton } from '../../patterns/singleton/singleton.pattern';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  public singleton: Singleton = Singleton.current
  
  constructor() { }

  ngOnInit(): void {
  }

  public singletonClick(){
    this.singleton.counter++;
  }

}
