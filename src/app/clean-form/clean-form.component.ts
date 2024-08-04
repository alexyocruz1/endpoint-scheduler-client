import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-clean-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import necessary modules
  templateUrl: './clean-form.component.html',
  styleUrls: ['./clean-form.component.scss']
})
export class CleanFormComponent {
  endpoint: string = '';
  frequency: number = 24; // Default frequency
  method: string = 'GET'; // Default method

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.submitEndpoint({ endpoint: this.endpoint, frequency: this.frequency, method: this.method })
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