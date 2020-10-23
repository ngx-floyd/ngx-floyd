import { animate, query, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RhetosRest } from '@ngx-floyd/rhetos';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(':leave', [style({ opacity: 1 }), animate('0.2s', style({ opacity: 0 }))], {
      optional: true,
    }),
    query(':enter', [style({ opacity: 0 }), animate('0.4s', style({ opacity: 1 }))], {
      optional: true,
    }),
  ]),
]);

@Component({
  selector: 'ngx-floyd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [fadeAnimation],
})
export class AppComponent implements OnInit {
  constructor(private rhetosRest: RhetosRest) {}

  ngOnInit() {}
}
