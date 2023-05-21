import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.scss']
})
export class LocalStorageComponent implements OnInit{

    greeting = ''

    ngOnInit(){
        localStorage.setItem('greeting', 'Hello Novatec');
        this.greeting = localStorage.getItem('greeting') ?? '';
        console.log(this.greeting);
    }
}
