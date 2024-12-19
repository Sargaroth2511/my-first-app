import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccesAlertComponent } from './succes-alert/succes-alert.component';
import { TestComponent } from './test/test.component';
import { BookingCalculationInputWindowComponent } from './booking-calculation-input-window/booking-calculation-input-window.component';
import { BookingCalclulationInvoiceWindowComponent } from './booking-calclulation-invoice-window/booking-calclulation-invoice-window.component';


@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccesAlertComponent, TestComponent, BookingCalculationInputWindowComponent, BookingCalclulationInvoiceWindowComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
