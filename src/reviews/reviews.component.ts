import { CommonModule } from '@angular/common';
import { Component, Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  @Input() isOpen: boolean = false; 
  @Input() title: string = 'Modal Title'; 
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
