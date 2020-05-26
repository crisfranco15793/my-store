import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  swiper: Swiper;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container');
  }

}
