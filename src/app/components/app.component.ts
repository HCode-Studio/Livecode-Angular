import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  providers: [],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CarConvoit';
  constructor() {

  }

  ngOnInit(): void {
    console.log('AppComponent initialized');
  }
}
