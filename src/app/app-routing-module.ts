import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Users } from './pages/users/users';
import { User } from './pages/user/user';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'users/list', component: Users },
  { path: 'users/details', component: User },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
