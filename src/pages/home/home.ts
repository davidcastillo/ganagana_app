import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from '../../app/services/firebase.service';
import { LoginPage } from '../login/login';
import { NumerologiaPage } from '../numerologia/numerologia';


@Component({
  selector: 'home-page',
  templateUrl: 'home.html',
  providers: [FirebaseService],
})

export class HomePage implements OnInit{ 


  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _firebaseService: FirebaseService) {}

  ngOnInit(){
    this._firebaseService.soyUnmetodo();
   // this._firebaseService.sessionvalidation();
    this.testing()
  }

 testing(){
   let islogged = false
    if(this._firebaseService.isAlreadyLoggedIn() == islogged){
      console.log('esta a punto de tomar la decision');
      this.navCtrl.push(LoginPage);
      console.log('debio mandar a loginpage');
    }
/*    else{
       this.navCtrl.push(NumerologiaPage);
    }*/

  }
}

//this._firebaseService.sessionvalidation()