import { Component } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes: number;
  counterSubscription: Subscription;

    constructor(){

    }

    ngOnInit(){
      const counter = Observable.interval(1000);
      this.counterSubscription = counter.subscribe(
        (value: number) =>{
          this.secondes = value;
        }
      );
    }

    ngOnDestroy(){
      this.counterSubscription.unsubscribe();
    }

}
