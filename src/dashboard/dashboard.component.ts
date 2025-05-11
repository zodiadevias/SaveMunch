import { Component , OnInit} from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import Chart, { scales } from 'chart.js/auto';


@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  name : string = 'Tinapayan';
  public chart: any;
  ngOnInit(){
    this.createChart('line','lineChart');
    
  }


  constructor() { 
    this.createChart('line','lineChart');
  }
  
  createChart(t: any, name: any){

    this.chart = new Chart(name, {
      type: t,

      data: {
        labels: [
          ...Array.from({length: 31}, (_, i) => (i+1).toString())
        ], 
           datasets: [
          {
            label: "",
            data: Array.from({length: 31}, (_, i) => ((i + Math.random()*100) * Math.random() * 10000).toString()),
            backgroundColor: 'white',
            borderColor: 'white',
            borderWidth: 2,
            fill: true,
            pointBackgroundColor: '#1A5319',
            
            
            
          }
        ]
      },
      options: {
        
        maintainAspectRatio: false,
        labels: {
          color: '#FEFAE0'
        },
        tooltip: {
          bodyColor: '#FEFAE0'
        },
        scales: {
          x: {
            ticks: {
              color: '#FEFAE0'
            }
          },
          y: {
            ticks: {
              color: '#FEFAE0'
            }
          }
        },
        
      }

    });
  }

}
