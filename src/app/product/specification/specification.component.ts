import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {

  page_no : number;

  constructor(private route : ActivatedRoute) {
    this.route.queryParams.subscribe(params=>{
      this.page_no = +params['page_no']
    })
   }

  ngOnInit() {
  }

}
