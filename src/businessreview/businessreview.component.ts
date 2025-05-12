import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-businessreview',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './businessreview.component.html',
  styleUrl: './businessreview.component.css'
})
export class BusinessreviewComponent {
  name = 'Tinapayan';

}
