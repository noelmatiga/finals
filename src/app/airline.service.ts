import { Injectable } from '@angular/core';
//import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase/app'
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;



@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  DATA_STORAGE: any;
  Storage: any;

  constructor( private router: Router, private http:HttpClient) { 
    this.init()

  }

  saveFlight(key, value){
   this.Storage.set(key, value)
  }

  deleteFlight(key){
    this.Storage.remove(key)
  }
  updateFlight(key, newValue){
    this.Storage.set(key, newValue)
   this.getAllFlight()
 }

  getAllFlight(){
    let bookings: any = []
    this.Storage.forEach((key, value, index) => {
      bookings.push({'key':value, 'value':key})
    });
    return bookings
  }
  logout(){
    this.router.navigate(['/loginscreen'])
  }

  addflight1(param: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getData().then(data => {
        let tempBooking = [];
        for (let i = 0; i < data.length; i++) {
          tempBooking.push(data[i]);
        }
        tempBooking.push(param);
        Storage.set({ key: this.DATA_STORAGE, value: JSON.stringify(tempBooking) });
        resolve(tempBooking);
      })
    });
  }
  public async getData(){
    const pass = await this.Storage.get({key: this.DATA_STORAGE});
    return JSON.parse(pass.value) || [];
  }
  getDatafromLumen(): Promise<any> {
    return new Promise( (resolve, reject)=> {
      this.http.get("http://localhost:8000/api/booking").subscribe(data =>{
        resolve(data);
      },
      err =>{
        reject(err);
      });
    });
    }
    
    insertDatatoLumen(from, to, departure, arrive): Promise<any>{
      return new Promise((resolve, reject)=>{
        const data ={
          from: from,
          to: to,
          departure: departure,
          arrive: arrive
        };
        //this.http.get("http://localhost/:8000/api/create").subscribe(data =>{
        //resolve(data);
     // },
     // err =>{
     //   reject(err);
     // });
    });
      }
      
  async init(){
    await this.Storage.create()
  }
}


