import { Component } from '@angular/core';
import { AuthModalComponent } from "../auth-modal/auth-modal.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [AuthModalComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isModalOpen: boolean = false;

openModal(): void {
  this.isModalOpen = true;
}
  whatAmI = 'guest';


isOpen: boolean = false;

toggleDropdown() {
  this.isOpen = !this.isOpen;
}
}
