import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-businesssignup',
  imports: [HeaderComponent, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './businesssignup.component.html',
  styleUrl: './businesssignup.component.css'
})
export class BusinesssignupComponent implements OnInit{
  
  ngOnInit(): void {
    this.fetchData();
  }

  selectedLocation: string = '';
  httpClient = inject(HttpClient);
  locations: any = [];

  fetchData() {
    this.httpClient.get('https://psgc.gitlab.io/api/provinces/').subscribe(data => {
      console.log(data);
      this.locations = data;
    });
  }
  

}
