import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  All(){
    this.route.navigate([''])
  }
  green(){
    this.route.navigate(['gainers'])
  }
  red(){
    this.route.navigate(['losers'])
  }

}
