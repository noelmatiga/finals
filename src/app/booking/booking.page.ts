import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AirlineService } from '../airline.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  flights = ['One-way', 'Two-way', 'Multi-city']

  passName
  passflight
  passtravType
  passfrom
  passto
  passdeparture
  passarrival

  flightObject = {}
  constructor(public modalCtrl:ModalController, public airlineService:AirlineService) { }

  ngOnInit() {
  }
  async dismis(){
    await this.modalCtrl.dismiss(this.flightObject)
  }
  selectedFlight(index){
    this.passflight = this.flights[index]
  }
 // async saveFlight(){
    //this.flightObject =({name:this.passName,
     //                     plane:this.passflight,
      //                      travel:this.passtravType,
        //                      from:this.passfrom,
         //                       to:this.passto,
          //                        depart:this.passdeparture,
        //                            arrive:this.passarrival})
                                    
         //               console.log(this.flightObject);
         //                 let uid = this.passName + this.passflight + this.passtravType + 
          //                          this.passfrom + this.passto + this.passdeparture +
           //                         this.passarrival
           //                     if(uid){
           //                         await this.airlineService.saveFlight(uid,this.flightObject)
           //                       }else{
           //                         console.log("can't save flight");
           //                       }
           //         this.dismis()
  //}
}
