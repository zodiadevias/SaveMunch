import { Component, HostListener, OnInit } from '@angular/core';
import { AuthModalComponent } from "../modal/auth-modal.component";
import { CommonModule } from '@angular/common';
import { GlobalService } from '../global.service';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-header',
  imports: [AuthModalComponent, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  screenWidth: number = window.innerWidth;
  


  isModalOpen: boolean = false;
  isVisible: boolean = false;

  constructor(private globalService: GlobalService, private router: Router, public authService: AuthService) {
    
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
    console.log(this.whatAmI);
    this.screenWidth = window.innerWidth;
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  ngDoCheck() {
    this.whatAmI = this.globalService.getWhatAmIHead();
    
  }


isOpen: boolean = false;

toggleDropdown() {
  this.isOpen = !this.isOpen;
}

login(user: string){
  
  if(this.screenWidth < 768){
    this.router.navigate(['/mobile/login']);

    
  }else{
    this.openModal(user);
  }
}

signup(user: string){
  this.openModal(user);
}

businessSignup(){
  this.whatAmI = 'none';
  console.log(this.whatAmI);
  this.router.navigate(['/b/register']);
}


logout(){
  this.authService.logout()
    .then(() => {
      console.log('User logged out');
      this.globalService.setWhatAmIHead('guest');
    })
    .catch(err => console.error('Logout error:', err));
}
}
