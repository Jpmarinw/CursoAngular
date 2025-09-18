import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../_services/user-service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {
  selectedUser: User | null = null;
  userForms: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.userForms = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(250)]],
      idade: ['', [Validators.required, Validators.min(12), Validators.max(120)]],
    });
  }

  submitForm() {
    if (this.userForms.valid) {
      const newUser: User = {
        nome: this.userForms.value.nome,
        idade: this.userForms.value.idade,
      };
      this.users.push(newUser);
      this.userForms.reset();
    }
  }

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

  infoUserSelecionado(user: User) {
    this.selectedUser = user;
    this.userService.setUser(user);
  }
}
