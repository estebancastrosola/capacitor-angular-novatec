import { Component } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {WebcamImage} from "ngx-webcam";
import { Camera, CameraResultType } from '@capacitor/camera';
import {Capacitor} from "@capacitor/core";


@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent {
    private trigger: Subject<any> = new Subject();
    public webcamImage!: WebcamImage;
    private nextWebcam: Subject<any> = new Subject();
    sysImage = '';

    isNative = false;
    ngOnInit() {
        this.isNative = Capacitor.isNativePlatform();
    }
    public getSnapshot(): void {
        this.trigger.next(void 0);
    }
    public captureImg(webcamImage: WebcamImage): void {
        this.webcamImage = webcamImage;
        this.sysImage = webcamImage!.imageAsDataUrl;
        console.info('got webcam image', this.sysImage);
    }
    public get invokeObservable(): Observable<any> {
        return this.trigger.asObservable();
    }
    public get nextWebcamObservable(): Observable<any> {
        return this.nextWebcam.asObservable();
    }


    //native
    takePicture = async () => {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.Uri
        });
    };
}
