import { Component, OnInit } from '@angular/core';
import { shareReplay, switchMap, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SolaxRealTimeData } from '../solax-real-time-data';




@Component({
  selector: 'app-electricity-monitor',
  templateUrl: './electricity-monitor.component.html',
  styleUrls: ['./electricity-monitor.component.css']
})
export class ElectricityMonitorComponent implements OnInit {

  solarPanelProduction: number = 0;
  batteryProduction: number = 0;
  networkProduction: number = 0;
  houseConsumption: number = 0;

  constructor() { }

  ngOnInit(): void {
    const productionTimer = timer(0, environment.productionRefreshInterval);
    const productionCache = productionTimer.pipe(
      switchMap(_ => fetch(`http://${environment.deviceAddress}/api/realTimeData.htm`)),
      shareReplay(1)
    );
    productionCache.subscribe(response => {
      if (response.ok) {
        response.json().then((realTimeData: SolaxRealTimeData) => {
          console.log(realTimeData);
        });
      }
    });
  }



}
