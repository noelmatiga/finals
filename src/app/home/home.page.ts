import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { AirlineService } from '../airline.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  today : number = Date.now()

  passFrom 
  passTo 
  passDeparture 
  passArrival 

  booking: any = [];

  constructor(private router: Router,
    public alertController: AlertController,
    public modalCtrl:ModalController,
    public airlineService:AirlineService) {}

    async ngOnInit(){
      this.getAllData();
    }
    //async dismis(){
     // await this.modalCtrl.dismiss(this.booking)
   // }

  //async //addflight1(){
    //this.bookingObject =({
     // from:this.passFrom,
     // to:this.passTo,
     // departure:this.passDeparture,
     // arrive:this.passArrival
    //})
   // console.log(this.bookingObject);
       //         let uid =
        //                  this.passFrom +
        //                  this.passTo +
         //                 this.passDeparture +
          //                this.passArrival
          //                if(uid){
           //                 await this.airlineService.saveFlight(uid,this.bookingObject)
                            //this.router.navigate(['login']);
             //               console.log('yehey');
             //                   }else{
              //              console.log("can't save flight");
             //             }
            //this.dismis() 
  //}
    
  //addflight1(){
    //this.airlineService.addflight1({from : this.passFrom,
      //                              to : this.passTo,
        //                              departure : this.passDeparture,
          //                              arrive : this.passArrival}).then(data =>{
            //                                this.booking = data;
              //                              this.clearField()
                //                        })
  //}
  addflight1(){
    this.airlineService.insertDatatoLumen(this.passFrom, 
                                          this.passTo, 
                                          this.passDeparture, 
                                          this.passArrival).then(data =>{
                                          this.clearField();
                                          this.getAllData();
                         })
                         this.router.navigate(['login']);
  }
  getAllData(){
    this.airlineService.getDatafromLumen().then(data => {
      this.booking= data;
      console.log(data);
    });
  }
  clearField(){
    this.passFrom = "";
    this.passTo = "";
    this.passDeparture = "";
    this.passArrival = "";
  }
}
  