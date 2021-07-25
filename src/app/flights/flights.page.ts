import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookingPage } from '../booking/booking.page';
import { AirlineService } from '../airline.service';
import { UpdateflightPage } from '../updateflight/updateflight.page';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.page.html',
  styleUrls: ['./flights.page.scss'],
})
export class FlightsPage implements OnInit {
  AirlineBooking = []
  today : number = Date.now()

  constructor(public modalCtrl:ModalController, public airlineService:AirlineService) {
    this.getAllFlight()
   }

    async addFlight(){
      const modal = await this.modalCtrl.create({
        component: BookingPage
      })

      modal.onDidDismiss().then(newFlightObj =>{
        //console.log(newFlightObj.data);
        //this.AirlineBooking.push(newFlightObj.data)
        this.getAllFlight()

      })
      return await modal.present()
    }
    getAllFlight(){
      this.AirlineBooking = this.airlineService.getAllFlight()
      console.log(this.airlineService.getAllFlight());
    }

    deleteFlight(key){
      //console.log(key);
      let status = confirm("Are you sure you want to cancel you flight?");
  
      if(status == true){
        this.airlineService.deleteFlight(key)
        this.getAllFlight()
      }
      else{
       console.log("Cancelled Flight");
      }
    }

    async update(clickedFlight){
      const modal = await this.modalCtrl.create({
        component: UpdateflightPage,
        componentProps: {schedule: clickedFlight}
      })

      modal.onDidDismiss().then(()=>{
        this.getAllFlight()

      })

      console.log(clickedFlight);
      return await modal.present()
    }
    
    ngOnInit() {
    }
}
