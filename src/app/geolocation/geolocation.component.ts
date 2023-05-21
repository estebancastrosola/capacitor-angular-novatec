import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent implements OnInit{

    longitude = 0;
    latitude= 0;
    constructor() {}
    ngOnInit(): void {
        navigator.geolocation.getCurrentPosition((pos)=>{
            console.log(pos.coords.latitude +' '+ pos.coords.longitude);
            this.latitude = pos.coords.latitude;
            this.longitude = pos.coords.longitude;
        },function(){
            console.log('User not allowed')
        },{timeout:10000})
    }
}
