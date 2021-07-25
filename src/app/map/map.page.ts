import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  today : number = Date.now()
  constructor(public alertController: AlertController) { 
  }
  async presentAlert(title: string, content: string){
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['Ok']
    })
    await alert.present()
  }
  ngOnInit() {
  }
  addflight4(){
    this.presentAlert('Succesfully', 'Booked Your Flight !')
  }

}
