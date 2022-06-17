import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ElectricityMonitorComponent } from './electricity-monitor/electricity-monitor.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ElectricityMonitorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
