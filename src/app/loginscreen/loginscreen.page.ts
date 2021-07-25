import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  navigateToBooking(){
    this.router.navigate(['home']);
    console.log('Welcome Home');
  }

}
