import { Component, OnInit } from '@angular/core';
import { Singleton } from '../../patterns/singleton/singleton.pattern';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public singleton: Singleton = Singleton.current
  
  constructor() { }

  ngOnInit(): void {
  }

}
