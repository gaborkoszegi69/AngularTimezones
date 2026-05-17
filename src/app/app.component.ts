import { Component } from '@angular/core';
import {TimezoneComponent} from './timezone/timezone.component';

@Component({
  selector: 'app-root',
  imports: [TimezoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-timezones';
}
