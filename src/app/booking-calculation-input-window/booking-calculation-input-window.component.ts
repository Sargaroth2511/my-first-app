import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { BookinWindowData } from './booking-calculation-input-window.data';

@Component({
  selector: 'app-booking-calclulation-input-window',
  templateUrl: './booking-calculation-input-window.component.html',
  styleUrl: './booking-calculation-input-window.component.css'
})
export class BookingCalculationInputWindowComponent {
  
  windowIsVisible: boolean = true;
  formCleared: boolean = false;

  @Output() rowsChanged = new EventEmitter<BookinWindowData[]>();
  @Output() closeWindow = new EventEmitter<void>(); 

  storedRows: BookinWindowData[] = [new BookinWindowData()];
  rows: BookinWindowData[] = [new BookinWindowData()];

  close() {
    this.closeWindow.emit();
  }

  showInvoice(): void {
    let rowsToEmitt = this.rows.filter(row => this.isValidRow(row));
    if (rowsToEmitt.length !== this.rows.length-1) {
      alert('Bitte füllen Sie alle Felder korrekt aus.');
      return;
    }
    this.rowsChanged.emit(rowsToEmitt); 
  }

  onCheckboxChange(index: number): void {
    // If checkbis is unchecked, remove the row
    if (!this.rows[index].checked) {
      this.rows.splice(index, 1);
    // If last checkbis is checked, add a new row  
    } else if (index === this.rows.length - 1) {
      this.rows.push(new BookinWindowData());
    }
  }

  validateDates(row: any): void {
    if (row.from && row.to) {
      const startDate = new Date(row.from);
      const endDate = new Date(row.to);

      if (endDate <= startDate) {
        const correctedEndDate = new Date(startDate);
        correctedEndDate.setDate(correctedEndDate.getDate() + 1); 
        row.to = correctedEndDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD
        alert('Das Enddatum muss mindestens einen Tag nach dem Anfangsdatum liegen.');
      }
    }
  }

  validatePrice(row: any): void {
    const priceRegex = /^\d+(?:,\d{1,2})?$/;
  
    if (!row.price) return;
  
    row.price = row.price.trim();
  
    if (!priceRegex.test(row.price)) {
      alert('Ungültiger Preis! Bitte geben Sie eine Zahl im Format 123,45 ein.');
      return;
    }
    
    this.formatPrice(row);
    
  }

  formatPrice(row: any): void {
    if (row.price.includes(',')) {
      const parts = row.price.split(',');
      let integerPart = parts[0];
      let decimalPart = parts[1];

      if (decimalPart.length === 0) {
        decimalPart = '00'; 
      } else if (decimalPart.length === 1) {
        decimalPart += '0'; 
      }
      row.price = `${integerPart},${decimalPart}`;
    } else {
      row.price += ',00';
    }
  }  

  isValidRow(row: any): boolean {
    return row.type && row.from && row.to && row.price && row.price !== '';
  }

  clearFrom() : void {
    if (this.rows.length === 1) return; // Do not clear the only row
    this.storedRows = this.rows;
    this.rows = [new BookinWindowData()];
    this.formCleared = true;
  }

  restoreForm() : void {
    this.rows = this.storedRows;
    this.formCleared = false;
  }

}
