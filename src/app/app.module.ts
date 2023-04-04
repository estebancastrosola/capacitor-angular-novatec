import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WebcamModule} from "ngx-webcam";
import { CameraComponent } from './camera/camera.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';

@NgModule({
    declarations: [
        AppComponent,
        CameraComponent,
        GeolocationComponent,
        LocalStorageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        WebcamModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
