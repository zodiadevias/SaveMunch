import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from '../reviews/reviews.component';

@Component({
  selector: 'app-store',
  imports: [HeaderComponent, CommonModule, ReviewsComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
  isModalOpen: boolean = false;
  isVisible: boolean = false;

openModal(): void {
  this.isModalOpen = true;
  this.isVisible = false;
  
}
closeModal(){
  this.isModalOpen = false; 
}
  cart = [];


  toggleVisibility(){
    if(this.isVisible == true){
      this.isVisible = false;
    }
    else{
      this.isVisible = true;
    }
  }


}
