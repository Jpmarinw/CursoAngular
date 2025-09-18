import { Component, OnInit, signal } from '@angular/core';
import { UserService } from './_services/user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App implements OnInit {
  ngOnInit() {
    this.getUser();
  }

  constructor(private userService: UserService) {}

  getUser() {
    const user = localStorage.getItem('user');
    this.userService.setUser(user ? JSON.parse(user) : undefined);
  }
}
