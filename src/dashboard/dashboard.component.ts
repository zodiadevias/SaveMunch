import { Component , HostListener, OnInit} from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import Chart, { scales } from 'chart.js/auto';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent{
  screenWidth: number = window.innerWidth;
  name : string = 'Tinapayan';
  public chart: any;
  whatAmI = 'guest';


  ngOnInit() {
    this.screenWidth = window.innerWidth;
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
