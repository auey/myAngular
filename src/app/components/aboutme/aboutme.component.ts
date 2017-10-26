import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  private name : string;
  private id : string;
  private nickname : string;
  private birth : string;
  private age : string;
  private study : string

  constructor() { }

  ngOnInit() {
    this.name = "PONGKARUINA PONGTHONGNUN"
    this.id = "58102010813"
    this.nickname = "My nickname is Auey."
    this.birth = "My birthday is 7 November 1996."
    this.age = "I'm 20 years old."
    this.study = "I'M A JUNIOR IN COMPUTER SCIENCE AT SRINAKHARINWIROT UNIVERSITY."
  }

}
