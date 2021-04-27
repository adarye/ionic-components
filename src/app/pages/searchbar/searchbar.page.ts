import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albums: any[] = [];
  textoBuscar: string = ''
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbunes().subscribe((res: any) => this.albums = res)
  }
  search(event) {
    console.log(event);
    this.textoBuscar = event.detail.value
  }

}
