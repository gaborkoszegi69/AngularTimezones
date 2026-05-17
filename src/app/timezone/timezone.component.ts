import {Component, EventEmitter, Input, Output,OnInit } from '@angular/core';


@Component({
  selector: 'app-timezone',
  imports: [],
  templateUrl: './timezone.component.html',
  styleUrl: './timezone.component.scss'
})
export class TimezoneComponent implements OnInit{
  @Input() timezone: string ='Europe/Budapest';
  @Input() isCurrent = false;
  time ='';
  constructor() {

  }
  ngOnInit(){
    this.updateTime();
  }
  private updateTime() {
     this.time = new Date().toLocaleString('hu-HU',{timeZone: this.timezone});
  }
}
