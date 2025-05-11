import { Component } from '@angular/core';
import { AuthModalComponent } from "../auth-modal/auth-modal.component";


@Component({
  selector: 'app-header',
  imports: [AuthModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isModalOpen: boolean = false;

openModal(): void {
  this.isModalOpen = true;
}
  whatAmI = 'guest';

}
