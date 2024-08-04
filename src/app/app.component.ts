// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CleanFormComponent } from './clean-form/clean-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CleanFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'temp-endpoint-cleaner';
}