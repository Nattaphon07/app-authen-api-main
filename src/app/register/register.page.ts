import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router'; // Corrected import

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  txtname: any;
  txtemail: any;
  txtusername: any;
  txtpassword: any;

  constructor(
    public dataapi: DataapiService,
    public router: Router // Corrected to Router
  ) { }

  ngOnInit() { }

  register() {
    let data = {
      name: this.txtname,
      email: this.txtemail,
      username: this.txtusername,
      password: this.txtpassword
    };
    this.dataapi.registerUser(data).subscribe({
      next: (res: any) => {
        alert(res.message);
        this.cls(); // Clear form fields upon successful registration
        this.router.navigateByUrl('/home'); // Navigate to login page after registration
      },
      error: (err: any) => {
        alert(err.error.message);
      }
    });
  }

  cls() {
    this.txtname = '';
    this.txtemail = '';
    this.txtusername = '';
    this.txtpassword = '';
  }

  login() {
    this.router.navigateByUrl('/home'); // Navigate to login page
  }
}
