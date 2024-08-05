import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserListComponent } from "./users/user-list/user-list.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, UserListComponent, HttpClientModule],
  templateUrl: './app.component.html',
  providers: [],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Livecode P8';
  constructor() {

  }

  ngOnInit(): void {
    console.log('AppComponent initialized');
  }
}
