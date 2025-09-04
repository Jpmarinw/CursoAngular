import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { Navbar } from './_components/navbar/navbar';
import { Footer } from './_components/footer/footer';
import { BaseUi } from './_components/base-ui/base-ui';
import { Users } from './pages/users/users';
import { User } from './pages/user/user';
import { UserCard } from './_components/user-card/user-card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, Home, Navbar, Footer, BaseUi, Users, User],
  imports: [BrowserModule, AppRoutingModule, UserCard, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection()],
  bootstrap: [App],
})
export class AppModule {}
