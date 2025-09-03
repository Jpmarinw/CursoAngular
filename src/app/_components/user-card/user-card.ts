import { Component, Input } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.css'],
})
export class UserCard {
  @Input() user: User = { nome: '', idade: 0 };
}
