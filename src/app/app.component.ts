import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecomm-mean-app';

  constructor(
    private api: ApiService,
    private router: Router,
    // private cartService: CartService
  ) {}
  baseurl = this.api.baseUrl

  categories: any

  ngOnInit() {
    this.api.post('productcategory/list', {}).subscribe((result: any) => {
      this.categories = result.data;
    });
  }

  routeLink(category) {
    this.router.navigate([`products/${category}`]);
  }
}
