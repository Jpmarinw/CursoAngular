import { Component } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  users: User[] = [
    {
      nome: 'João Pedro',
      idade: 25,
    },
    {
      nome: 'Maria',
      idade: 30,
    },
    {
      nome: 'Santos',
      idade: 28,
    },
    {
      nome: 'Ana',
      idade: 22,
    },
    {
      nome: 'Juliane',
      idade: 35,
    },
    {
      nome: 'Claudia',
      idade: 27,
    },
    {
      nome: 'Reginaldo',
      idade: 40,
    },
  ];
}
