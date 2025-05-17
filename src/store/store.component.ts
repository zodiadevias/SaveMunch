import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from '../modal/auth-modal.component';
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-store',
  imports: [HeaderComponent, CommonModule, AuthModalComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
  isModalOpen: boolean = false;
  isVisible: boolean = false;



  constructor(private globalService: GlobalService) {
    
  }

openModal(): void {
  this.globalService.setWhatAmI('reviews');
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
