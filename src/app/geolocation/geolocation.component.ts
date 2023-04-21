import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent implements OnInit{

    constructor() {}
    ngOnInit(): void {
        navigator.geolocation.getCurrentPosition(function(pos){
            console.log(pos.coords.latitude + pos.coords.longitude)
        },function(){
            console.log('User not allowed')
        },{timeout:10000})
    }
}
