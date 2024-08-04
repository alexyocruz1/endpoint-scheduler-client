// src/app/clean-form/clean-form.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clean-form',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './clean-form.component.html',
  styleUrls: ['./clean-form.component.scss']
})
export class CleanFormComponent {
  endpoint: string = '';
  frequency: number = 24; // Default frequency

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('/api/submit', { endpoint: this.endpoint, frequency: this.frequency })
      .subscribe({
        next: () => {
          alert('Endpoint submitted successfully');
        },
        error: () => {
          alert('Error submitting endpoint');
        }
      });
  }
}