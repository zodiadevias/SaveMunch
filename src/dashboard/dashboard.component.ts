import { Component , HostListener, OnInit} from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import Chart, { scales } from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from '../modal/auth-modal.component';
import { GlobalService } from '../global.service';
import { AuthService } from '../auth.service';
import { FirestoreService } from '../firestore.service';
import { getFirestore, doc, getDoc } from 'firebase/firestore';






@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, CommonModule, AuthModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent{
  screenWidth: number = window.innerWidth;

  isModalOpen: boolean = false;
  isVisible: boolean = false;


  name : any = '';
  public chart: any;
  whatAmI = '';
  
  



  constructor(private globalService: GlobalService, public authService: AuthService, public firestoreService: FirestoreService) {
    // this.globalService.setWhatAmIHead('guest');
    
  }


  async getBName(){
    const db = getFirestore();
    const user = this.authService.currentUser;

    if (user) {
      const uid = user.uid;
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        this.name = userData['businessName'] || null;
        console.log('Business name:', this.name);
      }
    }

    return null;
}

openModal(whatAmI: string): void {
  this.globalService.setWhatAmI(whatAmI);
  this.isModalOpen = true;
  this.isVisible = false;
}

checkUser() {
  console.log(this.authService.currentUser);
  if (!this.authService.currentUser) {
    this.openModal('guest');
  }
}

closeModal() {
  this.isModalOpen = false;
}

  async ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.getBName();
  }

  ngDoCheck() {
    this.whatAmI = this.globalService.getWhatAmIDashboard();
    console.log(this.whatAmI);
  }
  
  


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

 
  

  

  


  // ngOnInit(){
  //   this.createChart('line','lineChart');
    
  // }


  // constructor() { 
  //   this.createChart('line','lineChart');
  // }
  
  // createChart(t: any, name: any){

  //   this.chart = new Chart(name, {
  //     type: t,

  //     data: {
  //       labels: [
  //         ...Array.from({length: 31}, (_, i) => (i+1).toString())
  //       ], 
  //          datasets: [
  //         {
  //           label: "",
  //           data: Array.from({length: 31}, (_, i) => ((i + Math.random()*100) * Math.random() * 10000).toString()),
  //           backgroundColor: 'white',
  //           borderColor: 'white',
  //           borderWidth: 2,
  //           fill: true,
  //           pointBackgroundColor: '#1A5319',
            
            
            
  //         }
  //       ]
  //     },
  //     options: {
        
  //       maintainAspectRatio: false,
  //       labels: {
  //         color: '#FEFAE0'
  //       },
  //       tooltip: {
  //         bodyColor: '#FEFAE0'
  //       },
  //       scales: {
  //         x: {
  //           ticks: {
  //             color: '#FEFAE0'
  //           }
  //         },
  //         y: {
  //           ticks: {
  //             color: '#FEFAE0'
  //           }
  //         }
  //       },
        
  //     }

  //   });
  // }

}
