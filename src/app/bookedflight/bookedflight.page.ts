import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../airline.service';


@Component({
  selector: 'app-bookedflight',
  templateUrl: './bookedflight.page.html',
  styleUrls: ['./bookedflight.page.scss'],
})
export class BookedflightPage implements OnInit {
  AirlineBooking = []
  today : number = Date.now()
  private _airlineService: any;
  constructor(public airlineService:AirlineService) { 
    this.getAllFlight()
  }
  getAllFlight(){
    this.AirlineBooking = this.airlineService.getAllFlight()
    console.log(this.airlineService.getAllFlight());
  }

  ngOnInit() {
  }

}
