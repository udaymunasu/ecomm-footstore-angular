import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  categoryid: any;
  category: any;
  products: any;
  baseurl = this.api.baseUrl;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.categoryid =this.route.snapshot.params['categoryid'];
    this.bind();
  }

  bind() {
    debugger;
    this.api
      .post('productcategory/get', { data: { id: this.categoryid } })
      .subscribe((result: any) => {
        
        this.category = result.data;
        console.log(this.category)
      });
    this.api
      .post('product/list', { data: { pcid: this.categoryid } })
      .subscribe((result: any) => {
        
        this.products = result.data;
        console.log("this.products", this.products)
      });
  }
}
