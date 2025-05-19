import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GlobalService } from '../global.service';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})


export class AuthModalComponent {
  login = true;

  gotoSignUp() {
    this.login = false;
  }
  
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  whatami = ''
  constructor(private globalService: GlobalService, public authService: AuthService) {
    
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


  email = '';
  password = '';

  

  onLogin() {
    this.authService.login(this.email, this.password)
      .then(user => {
        console.log('Logged in:', user);
        this.close();
        this.globalService.setWhatAmIHead('user');
      })
      .catch(err => console.error('Login error:', err));
  }

  onRegister() {
    this.authService.register(this.email, this.password)
      .then(user => console.log('Registered:', user))
      .catch(err => console.error('Register error:', err));
  }

  onGoogleLogin() {
    this.authService.loginWithGoogle()
      .then(result => {
        console.log('Logged in with Google:', result.user);
        this.close();
        this.globalService.setWhatAmIHead('user');
      })
      .catch(error => {
        console.error('Google login error:', error);
      });
  }

  onLogout() {
    this.authService.logout()
      .then(() => console.log('User logged out'))
      .catch(err => console.error('Logout error:', err));
  }


}
