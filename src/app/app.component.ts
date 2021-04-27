import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  components: Observable<Componente[]>;
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.components = this.dataService.getMenuOpts();

  }
}
