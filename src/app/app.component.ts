import { Component } from '@angular/core';
import { BookinWindowData } from './booking-calculation-input-window/booking-calculation-input-window.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  showBookingWindow : Boolean = true;
  showInvoiceWindow : Boolean = false;

  rows:  BookinWindowData[] = []; 
  
  toggleVisibility(): void {
    this.showBookingWindow = !this.showBookingWindow;
    if (!this.showBookingWindow) {
      this.showInvoiceWindow = false; 
    }
  }

  updateRows(updatedRows: BookinWindowData[]): void {
    this.rows = updatedRows;
    this.showInvoiceWindow = true; // Rechnung anzeigen

  }

  closeInvoiceWindow(): void {
    this.showInvoiceWindow = false;
  }
  
}
