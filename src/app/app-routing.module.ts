import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CameraComponent} from "./camera/camera.component";
import {GeolocationComponent} from "./geolocation/geolocation.component";
import {LocalStorageComponent} from "./local-storage/local-storage.component";

const routes: Routes = [
    { path: 'camera', component: CameraComponent },
    { path: 'geolocation', component: GeolocationComponent },
    { path: 'localStorage', component: LocalStorageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
