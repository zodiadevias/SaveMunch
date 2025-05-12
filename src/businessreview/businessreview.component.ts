import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-businessreview',
  imports: [HeaderComponent],
  templateUrl: './businessreview.component.html',
  styleUrl: './businessreview.component.css'
})
export class BusinessreviewComponent {
  name = 'Tinapayan';

}
