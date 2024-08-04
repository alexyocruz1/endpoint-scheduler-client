import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CleanFormComponent } from './clean-form/clean-form.component';

@NgModule({
  declarations: [AppComponent, CleanFormComponent], // Declare CleanFormComponent
  imports: [BrowserModule, HttpClientModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}