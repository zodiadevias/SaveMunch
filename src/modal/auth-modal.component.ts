import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GlobalService } from '../global.service';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.model';
import { FirestoreService } from '../firestore.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})


export class AuthModalComponent {
  login = true;
  role: any = '';



  gotoSignUp() {
    this.login = false;
  }
  
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  whatami = ''
  constructor(
    private globalService: GlobalService, 
    public authService: AuthService, 
    public firestoreService: FirestoreService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.whatami = this.globalService.getWhatAmI();
    
  }

  ngDoCheck() {
    this.whatami = this.globalService.getWhatAmI();
  }

  


  close(): void {
    this.clearFields();
    this.closeModal.emit();
  }

 thisisme(whatami: string) {
  this.whatami = whatami;
}


  email = '';
  password = '';
  name = '';
  address = '';
  phone = '';
  contact = '';
  confirmPassword = '';
  error = '';
  
  
  clearFields() {
    this.email = '';
    this.password = '';
    this.name = '';
    this.address = '';
    this.phone = '';
    this.contact = '';
    this.confirmPassword = '';
    this.error = '';
  }

  onLogin() {
    this.authService.login(this.email, this.password)
      .then(user => {
        console.log('Logged in:', user);
        this.close();
        this.globalService.setWhatAmIHead('user');
        this.router.navigate(['/dashboard']);
      })
      .catch(err => console.error('Login error:', err));
  }

  onRegister() {
    if(this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }
    this.authService.register(this.email, this.password)
      .then(cred => {
        const user: User = {
        uid: cred.user.uid,
        email: cred.user.email!,
        name: this.name,
        role: 'customer',
      };
      this.firestoreService.createUser(user);
      console.log('User registered:', cred.user);
      this.close();
      this.clearFields();
      this.router.navigate(['/dashboard']);
      })
      .catch(err => console.error('Register error:', err));
  }

  onGoogleLogin() {
    this.authService.loginWithGoogle()
      .then(result => {
        console.log('Logged in with Google:', result.user);
        this.close();
        this.globalService.setWhatAmIHead('user');
        this.router.navigate(['/dashboard']);
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
