import { Component } from '@angular/core';
import { UserService } from '../../_services/user-service';
import { UserGit } from '../../_models/userGit';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  user: UserGit | undefined;

  usernameToSearch: string = '';

  constructor(private userService: UserService) {}

  searchUser() {
    if (!this.usernameToSearch) {
      alert('Por favor, insira um nome de usuário do GitHub.');
      return;
    }

    this.userService.getGitUser(this.usernameToSearch).subscribe({
      next: (response: UserGit) => {
        this.user = response;
      },
      error: (err) => {
        this.user = undefined;
        alert('Usuário não encontrado!');
      },
    });
  }
}
