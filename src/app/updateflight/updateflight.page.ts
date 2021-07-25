import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AirlineService } from '../airline.service';

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.page.html',
  styleUrls: ['./updateflight.page.scss'],
})

export class UpdateflightPage implements OnInit {
  @Input() schedule;
  flights = ['One-way', 'Two-way', 'Multi-city']
  AirlineBooking = []

  flightObject = {}
  passName
  passflight
  passtravType
  passfrom
  passto
  passdeparture
  passarrival

  constructor( public modalCtrl:ModalController, public airlineService:AirlineService) { }

  ngOnInit() {
    this.passName = this.schedule.value.name
    this.passflight = this.schedule.value.plane
    this.passtravType = this.schedule.value.travel
    this.passfrom = this.schedule.value.from
    this.passto = this.schedule.value.to
    this.passdeparture = this.schedule.value.depart
    this.passarrival = this.schedule.value.arrive
    //console.log(this.flight);
  }
  selectedFlight(index){
    this.passflight = this.flights[index]
  }
  async dismis(){
    await this.modalCtrl.dismiss(this.flightObject)
  }

  async update(){
    this.flightObject =({name:this.passName,
      plane:this.passflight,
        travel:this.passtravType,
          from:this.passfrom,
            to:this.passto,
              depart:this.passdeparture,
                arrive:this.passarrival})
                let uid = this.schedule.key
                await this.airlineService.updateFlight(uid,(this.flightObject))
                this.dismis()
  }
}
