import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fabs',
  templateUrl: './fabs.page.html',
  styleUrls: ['./fabs.page.scss'],
})
export class FabsPage implements OnInit {

  data = Array(100);
  constructor() { }

  ngOnInit() {
  }

}
