import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AirlineService } from '../airline.service';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.page.html',
  styleUrls: ['./bookflight.page.scss'],
})
export class BookflightPage implements OnInit {
  
  passName
  passAddress
  passAge
  passBirthdate
  passNumber
  passEmail

  bookingObject = {}

  constructor(public alertController: AlertController, public modalCtrl:ModalController,
    public airlineService:AirlineService) { }

  async presentAlert(title: string, content: string){
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['Ok']
    })
    await alert.present()
  }
  async dismis(){
    await this.modalCtrl.dismiss(this.bookingObject)
  }
  ngOnInit() {
  }
  async addflight4(){
    this.bookingObject =({name:this.passName,
                          address:this.passAddress,
                          age:this.passAge,
                          birthdate:this.passBirthdate,
                          number:this.passNumber,
                          email:this.passEmail})

                          console.log(this.bookingObject);

                          let uid = this.passName +
                                    this.passAddress +
                                    this.passAge +
                                    this.passBirthdate +
                                    this.passNumber +
                                    this.passEmail 

                                    if(uid){
                                      await this.airlineService.saveFlight(uid,this.bookingObject)
                                      this.presentAlert('Succesfully', 'Booked Your Flight !')
                                    }else{
                                      console.log("can't save flight");
                                    }
                      this.dismis()
                                    
  }


}
