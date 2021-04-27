import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {
  usuarios: Observable<any>;
  @ViewChild(IonList) ionList: IonList;
  constructor(private dataService: DataService) { }

  ngOnInit() {
   this.usuarios = this.dataService.getUsuarios();
  }

  favorite(user:any){
  this.ionList.closeSlidingItems();
  }
  share(user:any){
    this.ionList.closeSlidingItems();
  }
  delete(user:any){
    this.ionList.closeSlidingItems();
  }

}
