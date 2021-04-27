import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-times',
  templateUrl: './date-times.page.html',
  styleUrls: ['./date-times.page.scss'],
})
export class DateTimesPage implements OnInit {

  fecha_naci: Date = new Date;
  customPickerOptions= {
    buttons:[
      {
        text: 'Mundo',
        handler: (event)=>{
          console.log(event);
        }
      },
      {
        text: 'Hola',
        handler: ()=>{
          console.log('hola');
        }
      }
    ]
  }
  customYearValues= [2020, 2016, 2008, 2004, 2000, 1996];
  constructor() { }

  ngOnInit() {
  }
  cambioFecha(event){
    console.log(event);
    console.log(new Date(event.detail.value));
  }

}
