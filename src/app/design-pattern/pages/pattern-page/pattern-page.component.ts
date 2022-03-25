import { Component, OnInit } from '@angular/core';
import { Singleton } from '../../patterns/singleton/singleton.pattern';

@Component({
  selector: 'app-pattern-page',
  templateUrl: './pattern-page.component.html',
  styleUrls: ['./pattern-page.component.css']
})
export class PatternPageComponent implements OnInit {

  singleton: Singleton = Singleton.current;
  
  constructor() { }

  ngOnInit(): void {
  }

}
