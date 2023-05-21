import {Component, OnInit} from '@angular/core';
import {Capacitor} from "@capacitor/core";
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent implements OnInit{

    longitude = 0;
    latitude= 0;
    constructor() {}
    async ngOnInit(): Promise<void> {

        if (Capacitor.isNativePlatform()) {
            const coordinates = await Geolocation.getCurrentPosition();
            console.log('Current position:', coordinates);
            this.latitude = coordinates.coords.latitude;
            this.longitude = coordinates.coords.longitude;
        } else {
            navigator.geolocation.getCurrentPosition((pos) => {
                console.log(pos.coords.latitude + ' ' + pos.coords.longitude);
                this.latitude = pos.coords.latitude;
                this.longitude = pos.coords.longitude;
            }, function () {
                console.log('User not allowed')
            }, {timeout: 10000})
        }
    }
}
