import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookinWindowData } from '../booking-calculation-input-window/booking-calculation-input-window.data';

@Component({
  selector: 'app-booking-calclulation-invoice-window',
  templateUrl: './booking-calclulation-invoice-window.component.html',
  styleUrl: './booking-calclulation-invoice-window.component.css'
})
export class BookingCalclulationInvoiceWindowComponent {
  @Input() invoiceData: BookinWindowData[] = [];
  @Output() closeInvoice = new EventEmitter<void>();

  calculateTotal(): string {
    const total = 
    this.invoiceData.reduce((sum, row) => {
      return sum + parseFloat(row.price.replace(',', '.'));
    }, 0);
    return total
            .toFixed(2)
            .replace('.', ',');
  }

  close(): void {
    this.closeInvoice.emit();
  }
}
