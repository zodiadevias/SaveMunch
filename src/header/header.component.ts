import { Component } from '@angular/core';
import { AuthModalComponent } from "../modal/auth-modal.component";
import { CommonModule } from '@angular/common';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-header',
  imports: [AuthModalComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isModalOpen: boolean = false;
  isVisible: boolean = false;

  constructor(private globalService: GlobalService) {
    this.globalService.setWhatAmIHead('guest');
  }


openModal(whatAmI: string): void {
  this.globalService.setWhatAmI(whatAmI);
  this.isModalOpen = true;
  this.isVisible = false;
}

closeModal() {
  this.isModalOpen = false;
}

  whatAmI = '';

  ngOnInit() {
    this.whatAmI = this.globalService.getWhatAmIHead();
  }

  ngDoCheck() {
    this.whatAmI = this.globalService.getWhatAmIHead();
  }


isOpen: boolean = false;

toggleDropdown() {
  this.isOpen = !this.isOpen;
}
}
