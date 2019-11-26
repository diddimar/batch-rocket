import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
registerLocaleData(es);
import { AppComponent } from './app.component';
import { BatchboxOutcomeComponent } from './batchbox-outcome/batchbox-outcome.component';
import { CalcService } from './calc.service';

@NgModule({
  declarations: [
    AppComponent,
    BatchboxOutcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CalcService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
