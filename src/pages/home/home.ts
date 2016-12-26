import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from '../../app/services/firebase.service';
import { LoginPage } from '../login/login'

@Component({
  selector: 'home-page',
  templateUrl: 'home.html',
  providers: [FirebaseService]
})

export class HomePage implements OnInit{ 


  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _firebaseService: FirebaseService) {}

  ngOnInit(){
    this._firebaseService.soyUnmetodo();
    this._firebaseService.sessionvalidation()
  }

  testing(){
    if(this._firebaseService.sessionvalidation()){
      this.navCtrl.push(LoginPage);
    }
  }
}

