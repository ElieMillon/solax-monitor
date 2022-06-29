import { Component, OnInit } from '@angular/core';
import { shareReplay, switchMap, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SolaxApiResult } from '../solax-api-result';




@Component({
  selector: 'app-electricity-monitor',
  templateUrl: './electricity-monitor.component.html',
  styleUrls: ['./electricity-monitor.component.css']
})
export class ElectricityMonitorComponent implements OnInit {

  solarPanelProduction: number = 0;
  batteryStorage: number = 0;
  networkProduction: number = 0;
  houseConsumption: number = 0;

  constructor() { }

  ngOnInit(): void {
    if (environment.solax.tokenId && environment.solax.sn) {
      const productionTimer = timer(0, environment.solax.refreshInterval);
      const productionCache = productionTimer.pipe(
        switchMap(_ => fetch(`https://www.solaxcloud.com:9443/proxy/api/getRealtimeInfo.do?tokenId=${environment.solax.tokenId}&sn=${environment.solax.sn}`)),
        shareReplay(1)
      );
      productionCache.subscribe(response => {
        if (response.ok) {
          response.json().then((result: SolaxApiResult) => {
            this.houseConsumption = result.feedinpower;
            this.solarPanelProduction = result.acpower;
            this.networkProduction = result.feedinpower;
            this.batteryStorage = result.soc;
          });
        }
      });
    }
  }



}
