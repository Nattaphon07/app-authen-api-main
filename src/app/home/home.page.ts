import { Component } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  txtusername: string = '';
  txtpassword: string = '';

  constructor(
    private dataapi: DataapiService,
    private router: Router
  ) {}

  login() {
    if (!this.txtusername || !this.txtpassword) {
      alert('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
      return;
    }

    const datalog = {
      username: this.txtusername,
      password: this.txtpassword
    };

    this.dataapi.login(datalog).subscribe(
      (response: any) => {
        if (response.success) {
          alert(response.message);
          localStorage.setItem('token', response.token);
          this.router.navigateByUrl('/admin');
        } else {
          alert('เข้าสู่ระบบไม่สำเร็จ: ' + response.message);
        }
      },
      (error) => {
        console.error('Login failed:', error);
        alert('เกิดข้อผิดพลาด');
      }
    );
  }

  gotoregister() {
    this.router.navigateByUrl('/register');
  }
}
