import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css'],
  providers : [DataService]
})
export class UserImgComponent implements OnInit {

  constructor(public dataService : DataService) { }
  increase(){
    this.dataService.counter++;
  }
  
  ngOnInit() {
  }

}
