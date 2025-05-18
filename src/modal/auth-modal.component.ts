import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-auth-modal',
  imports: [CommonModule],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})


export class AuthModalComponent {
  
  
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  whatami = ''
  constructor(private globalService: GlobalService) {
    
  }

  ngOnInit() {
    this.whatami = this.globalService.getWhatAmI();
  }

  ngDoCheck() {
    this.whatami = this.globalService.getWhatAmI();
  }

  


  close(): void {
    this.closeModal.emit();
  }

 thisisme(whatami: string) {
  this.whatami = whatami;
}






  login(){
    
  }


}
