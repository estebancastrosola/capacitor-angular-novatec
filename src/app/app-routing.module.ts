import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CameraComponent} from "./camera/camera.component";
import {GeolocationComponent} from "./geolocation/geolocation.component";
import {LocalStorageComponent} from "./local-storage/local-storage.component";
import {AngularBaseComponent} from "./angular-base/angular-base.component";

const routes: Routes = [
    { path: 'angular-base', component: AngularBaseComponent },
    { path: 'camera', component: CameraComponent },
    { path: 'geolocation', component: GeolocationComponent },
    { path: 'localStorage', component: LocalStorageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
