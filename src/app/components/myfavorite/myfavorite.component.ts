import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myfavorite',
  templateUrl: './myfavorite.component.html',
  styleUrls: ['./myfavorite.component.css']
})
export class MyfavoriteComponent implements OnInit {
  private album1 : string;
  private album2 : string;
  private album3 : string;
  private song1 : string;
  private song2 : string;
  private song3 : string;
  private released1 : string;
  private released2 : string;
  private released3 : string

  constructor() { }

  ngOnInit() {
    this.album1 = "Ambitions"
    this.album2 = "35xxxv"
    this.album3 = "Jinsei × Boku ="
    this.song1 = "We are"
    this.song2 = "Heartache"
    this.song3 = "The Beginning"
    this.released1 = "2017"
    this.released2 = "2015"
    this.released3 = "2013"
  }

}
