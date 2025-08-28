import { Component, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements DoCheck {

  num: number = 1

  ngDoCheck(): void {
    console.log('Uma mudança foi feita');
  }

  adiciona1(){
    this.num++;
  }
}
