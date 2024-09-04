import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { WeatherService } from '../../core/services/weather.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
    apiData: any;

    ngOnInit(): void { }

    constructor(private weatherService: WeatherService) { }

    getWeather() {
        this.weatherService.fetchWeatherData().subscribe(
            (data) => {
                this.apiData = data;
                console.log(this.apiData);
            },
            (error) => {
                console.log("Error fetching weather data: ", error);
            }
        );
    }

}
