import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss'],
})
export class SubCategoriesComponent implements OnInit {
  subCategoryFD: any;
  Subcategories: any;
  subcatimagestring;
  categories: any;
  baseUrl = this.api.baseUrl;
  imagestring = '';
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.bindSub();
    this.subCategoryFD = new FormGroup({
      id: new FormControl(''),
      categoryId: new FormControl(''),
      subCategory: new FormControl('', Validators.required),
      image: new FormControl(''),
    });
    this.api.post('productcategory/list', {}).subscribe((result: any) => {
      this.categories = result?.data;
      console.log(this.categories);
    });
  }

  bindSub() {
    this.api.post('subcategory/list', {}).subscribe((result: any) => {
      this.Subcategories = result?.data;
      console.log('this.subcategories', this.Subcategories);
    });
  }

  onSubCategorySave(data: any) {
    debugger;
    data.image = this.subcatimagestring;
    console.log('datadata', data);
    this.api
      .post('subcategory/save', { data: data })
      .subscribe((result: any) => {
        this.bindSub();
        console.log('sub category result', result);
      });
  }

  deleteSubcategory(id: string) {
    if (confirm('Sure to delete?')) {
      this.api
        .post('subcategory/delete', { data: { id: id } })
        .subscribe((result: any) => {
          this.bindSub();
        });
    }
  }

  editcategory(id: string) {
    this.api
      .post('productcategory/get', { data: { id: id } })
      .subscribe((result: any) => {
        let category = result.data;
        this.Subcategories = new FormGroup({
          id: new FormControl(category._id),
          name: new FormControl(category.name, Validators.required),
          srno: new FormControl(category.srno, Validators.required),
          image: new FormControl(''),
        });
      });
  }

  imageChanged(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result != null) {
        this.imagestring = reader.result.toString();
        this.subcatimagestring = reader.result.toString();
      }
    };
  }
}
