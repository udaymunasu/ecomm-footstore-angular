import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories:any;
  baseurl = this.api.baseUrl;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.post("productcategory/list", {}).subscribe((result:any)=>{
      this.categories = result.data;
    });
  }

}
