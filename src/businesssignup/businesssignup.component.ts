import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { v4 as uuidv4 } from 'uuid';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-businesssignup',
  imports: [HeaderComponent, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './businesssignup.component.html',
  styleUrl: './businesssignup.component.css'
})
export class BusinesssignupComponent implements OnInit{
  
  ngOnInit(): void {
    this.fetchData();
  }

  selectedLocation: string = '';
  httpClient = inject(HttpClient);
  firestore = inject(Firestore);
  storage = inject(Storage);
  locations: any = [];

  fetchData() {
    this.httpClient.get('https://psgc.gitlab.io/api/provinces/').subscribe(data => {
      console.log(data);
      this.locations = data;
    });
  }

  fullname: string = '';
  businessname: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  address: string = '';
  phone: string = '';
  contact: string = '';
  bir: string = '';
  id: string = '';
  error: string = '';
  
  clearfields(){
    this.fullname = '';
    this.businessname = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.address = '';
    this.phone = '';
    this.contact = '';
    this.bir = '';
    this.id = '';
    this.error = '';
    this.selectedLocation = '';
  }
  

  logoFile: File | null = null;
  logoPreview: string | null = null;
   onLogoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.logoFile = input.files[0];
      this.logoPreview = URL.createObjectURL(this.logoFile);
    }
  }

  async onRegister(): Promise<void> {
    if (!this.logoFile) {
      alert('Please upload a logo image.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      // ✅ Step 1: Register user first
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
      const uid = userCredential.user.uid;

      // ✅ Step 2: Upload logo after authentication
      const filePath = `store_logos/${uid}/${uuidv4()}_${this.logoFile.name}`;
      const fileRef = ref(this.storage, filePath);
      await uploadBytes(fileRef, this.logoFile);
      const logoUrl = await getDownloadURL(fileRef);

      // ✅ Step 3: Save store data
      const storesRef = collection(this.firestore, 'store_owners');
      await addDoc(storesRef, {
        uid,
        fullName: this.fullname,
        address: this.address,
        bir: this.bir,
        contactNumber: this.contact,
        idNumber: this.id,
        businessName: this.businessname,
        location: this.selectedLocation,
        email: this.email,
        logoUrl,
        createdAt: new Date(),
      });

      alert('Store registered successfully!');
      this.clearfields();
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again.');
    }
}



 

  


  

}
