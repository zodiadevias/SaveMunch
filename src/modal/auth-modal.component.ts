import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  imports: [CommonModule],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})
export class AuthModalComponent {
  whatami = 'partner';

  @Input() isOpen: boolean = false;
  @Input() title: string = 'Modal Title';
  @Output() closeModal = new EventEmitter<void>();

  close(): void {
    this.closeModal.emit();
  }

 thisisme(whatami: string) {
  this.whatami = whatami;
}
}
