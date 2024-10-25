import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  firstRowButtons = ['About us','Verticals','Landmark Projects','Human Capital'];
  secondRowButtons = ['Careers', 'CSR', 'Media Coverage', 'Gallery', 'Contact Us'];
  
  activeButtonFirstRow: number | null = null; // Active button index for the first row
  activeButtonSecondRow: number | null = null; // Active button index for the second row

  setActiveButton(index: number, row: string) {
    if (row === 'first') {
      this.activeButtonFirstRow = index; // Set the active button index for the first row
    } else if (row === 'second') {
      this.activeButtonSecondRow = index; // Set the active button index for the second row
    }
  }

}
