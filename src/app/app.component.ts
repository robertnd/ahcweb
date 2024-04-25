import { Component, OnInit } from '@angular/core';
import { Gradient } from 'src/assets/js/gradient.js';
// declare var gradient: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ahcweb';

  ngOnInit() { 
    var gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }
}
