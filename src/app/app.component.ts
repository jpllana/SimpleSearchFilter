import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructionsProject = [];
  filteredData = [];
  searchValue: string;
  constructor(public _service: AppService) {}

  ngOnInit() {
    this._service.getData().subscribe(
      (data) => {
        let arr = (data as any);
        this.constructionsProject = arr;
      }
    );
  }

  searchBtn(event) {
    this._service.getData().subscribe(
      (data) => {
        let arr = (data as any);
        this.constructionsProject = arr;
        if (event !== null || event !== '') {
          this.filteredData = this.constructionsProject.filter(function(e){
            if (e.title.search(new RegExp(event, 'i')) !== -1 || e.description.search(new RegExp(event, 'i')) !== -1) {
              return e.title || e.description;
            }
          });
          this.constructionsProject = this.filteredData;
        }
      }
    );
  }
}


