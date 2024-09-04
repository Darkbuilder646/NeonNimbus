import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather'
  private apiKey = environment.weatherApiKey

  constructor(private http: HttpClient) { }

  fetchWeatherData(): Observable<any> {
    const city = 'Lille';
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }

}
