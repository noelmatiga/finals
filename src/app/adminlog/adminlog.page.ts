import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-adminlog',
  templateUrl: './adminlog.page.html',
  styleUrls: ['./adminlog.page.scss'],
})
export class AdminlogPage implements OnInit {

    user : string = ""
    pass : string = ""
    admin : string = ""

  constructor(private router: Router, public alertController: AlertController) { }

  async presentAlert(title: string, content: string){
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['Ok']
    })
    await alert.present()
  }
  loginadmin(){
    const { user, pass} = this
    if(user == "admin" || pass == "admin"){
      this.router.navigate(['admin'])
      this.presentAlert('Welcome Back! ADMIN', '')
    }else{
      this.presentAlert('You Entered Incorrect ! Username or Password', '')
    }
  }



  ngOnInit() {
  }

}
