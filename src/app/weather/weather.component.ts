import { Component, Input, OnInit } from '@angular/core';
import { Observable, shareReplay, switchMap, timer, from, take, first, map, ObservableInput, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as Weather from 'weather-promise';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  // weather: Weather.Results | null = null;
  private weatherCache!: Observable<Array<Weather.Results>>;
  weather: Weather.Results | null = null;

  constructor() { }

  ngOnInit(): void {
    const weatherTimer = timer(0, environment.weatherRefreshInterval);
    this.weatherCache = weatherTimer.pipe(
      switchMap(_ => this.requestWeather()),
      shareReplay(1)
    );
    this.weatherCache.subscribe(results => {
      if (results?.length) {
        this.weather = results[0];
      }
    });
  }

  private requestWeather() {
    return from(Weather.find({ search: environment.place, lang: navigator.language, degreeType: environment.degreeType }))
  }




}
