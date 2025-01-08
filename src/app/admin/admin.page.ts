import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  constructor(
    private dataapi: DataapiService,
    private router: Router
  ) {}

  ngOnInit() {}

  logout() {
    // ไม่ส่งพารามิเตอร์ให้ logout()
    this.dataapi.logout().subscribe({
      next: () => {
        localStorage.removeItem('token');
        this.router.navigate(['/home']); // ใช้ router แทน route
      },
      error: (err) => {
        console.error('Logout failed:', err); // Log เพิ่มเติม
        alert(`Error: ${err.message}`);
      }
    });
  }
}
