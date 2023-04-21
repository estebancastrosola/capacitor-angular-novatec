import {Component, OnInit} from '@angular/core';
import {GeolocationService} from '@ng-web-apis/geolocation';
import {take} from "rxjs";

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent implements OnInit{

    latitude = 0;
    longitude = 0;

    constructor(private readonly geolocation$: GeolocationService) {}
    ngOnInit(): void {
        this.geolocation$.pipe(take(1)).subscribe(position => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
        });
    }
}
