import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  public cityName: string
  constructor(private http: HttpClient) { }

  getWeather(cityName: string){
    let key = '16e5f8d54fe79339c08e6aee154471f2';
    let unitformat = 'metric';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${key}&units=${unitformat} `;
    console.log(url);
    return this.http.get(url);
  }
}
