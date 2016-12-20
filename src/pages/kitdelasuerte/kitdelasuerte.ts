import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'kitdelasuerte-page',
  templateUrl: 'kitdelasuerte.html'
})
export class KitdelasuertePage {
  selectedItem: any;
  players: FirebaseListObservable<any>;
  player = {}


    constructor(public navCtrl: NavController, public navParams: NavParams, angFire: AngularFire) {
      // If we navigated to this page, we will have an item available as a nav param
      this.player = {
        name: "",
        mobile: "",
        email: "",
        city: "",
        date_of_birth: "",
        amulet_0: 123,
        amulet_1: 0,
        amulet_2: 0,
        amulet_3: 0,
        amulet_4: 0,
        amulet_5: 0,
      }
      this.selectedItem = navParams.get('item');
      this.players = angFire.database.list('/Players');
    }


    addPlayer(): firebase.Promise <any> {
        console.log(this.player);
        return this.players.push(this.player);
    }

 //     logForm() {
 //   console.log (this.player)
//  }

}