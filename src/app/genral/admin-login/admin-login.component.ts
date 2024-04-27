import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {
  formdata: any;
  message = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.formdata = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onClickSubmit(data: any) {
    // console.log(data);
    this.api.post('admin/login', { data: data }).subscribe(
      (result: any) => {
        console.log(result);
        if (result.data.status == 'success') {
          localStorage.setItem('usertype', 'admin');
          window.location.replace('/admin/dashboard');
        } else {
          this.message = 'Username or password is wrong.';
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
