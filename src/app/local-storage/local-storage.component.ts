import {Component, OnInit} from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import {Capacitor} from "@capacitor/core";


@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.scss']
})
export class LocalStorageComponent implements OnInit{

    greeting = ''

    async ngOnInit() {
        if (Capacitor.isNativePlatform()) {
            await Preferences.set({
                key: 'greeting',
                value: 'Hello Novatec',
            });
            this.greeting = (await Preferences.get({ key: 'greeting' })).value ?? '';
        } else {
            localStorage.setItem('greeting', 'Hello Novatec');
            this.greeting = localStorage.getItem('greeting') ?? '';
            console.log(this.greeting);
        }

    }
}
