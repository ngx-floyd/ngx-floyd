import { Component, OnInit } from '@angular/core';
import { RhetosRest } from '@ngx-floyd/rhetos';

@Component({
  selector: 'ngx-floyd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  constructor(private rhetosRest: RhetosRest) {}

  ngOnInit() {}
}
