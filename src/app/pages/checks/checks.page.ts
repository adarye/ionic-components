import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.page.html',
  styleUrls: ['./checks.page.scss'],
})
export class ChecksPage implements OnInit {

  data = [{
    color: 'primary',
    selected: false
  },
  {
    color: 'secondary',
    selected: true
  },
  {
    color: 'tertiary',
    selected: false
  },
  {
    color: 'success',
    selected: true
  }
]
  constructor() { }

  ngOnInit() {
  }
  onClick(item:any){
 console.log(item);
  }

}
