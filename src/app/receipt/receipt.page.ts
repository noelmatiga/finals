import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AirlineService } from '../airline.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.page.html',
  styleUrls: ['./receipt.page.scss'],
})
export class ReceiptPage implements OnInit {
  booking = []
  Storage: any;
  DATA_STORAGE: any;

  constructor(public airlineService:AirlineService, public modalCtrl:ModalController) { 
   // this.getAllFlight()
   this.getAllData()
  }
  public async getData(){
    const pass = await this.Storage.get({key: this.DATA_STORAGE});
    return JSON.parse(pass.value) || [];
  }
  getAllData(){
    this.airlineService.getDatafromLumen().then(data => {
      this.booking= data;
      console.log(data);
   });
 }
//  getAllFlight(){
//    this.booking = this.airlineService.getAllFlight()
//    console.log(this.airlineService.getAllFlight());
 // }
  deleteFlight(key){
    console.log(key);
    let status = confirm("Are you sure you want to cancel you flight?");

    if(status == true){
      this.airlineService.deleteFlight(key)
     this.getAllData()
    }
    else{
     console.log("Cancelled Flight");
    }
  }

  //async ngOnInit() {
    //this.airlineService.getData().then(data => {
      //this.booking = data;
    //});
  //}
  ngOnInit(){
    
  }
}

