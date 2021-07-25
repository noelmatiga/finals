import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { AirlineService } from '../airline.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  profile: any;
  profileName: any;
  profileNumber: any;
  profileEmail: any;

  constructor(private database: AngularFirestore, public airlineService: AirlineService) { }

  ngOnInit() {
    
  }

}
