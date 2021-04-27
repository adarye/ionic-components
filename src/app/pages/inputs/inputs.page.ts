import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  nombre: string = "David";
  usuario= {
    email: '',
    password: ''
  }
  constructor() { }

  ngOnInit() {
  }
  onSubmit(formulario){
console.log(formulario);
  }

}
