import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from '../../app/services/firebase.service';
import { Players } from '../../app/entities/Players';


@Component({
  selector: 'kitdelasuerte-page',
  templateUrl: 'kitdelasuerte.html',
  providers: [FirebaseService]

})
export class KitdelasuertePage implements OnInit{
  selectedItem: any;
  players: Players[];
  defaultplayer = {
    name: "",
    mobile: "",
    email: "",
    city: "",
    date_of_birth: "",
    amulet_0: 0,
    amulet_1: 0,
    amulet_2: 0,
    amulet_3: 0,
    amulet_4: 0,
    amulet_5: 0
  }
  model = new Players("", "", "", "", "", 0, 0, 0, 0, 0, 0);
  constructor(private _firebaseService: FirebaseService, public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  ngOnInit(){
    this._firebaseService.getPlayers().subscribe(players => {
      this.players = [ this.defaultplayer ];
      console.log(players);
    })
  }
  addPlayer(){
    let result: any;
    let newplayer = {
      name: this.model.name,
      mobile: this.model.mobile,
      email: this.model.email,
      city: this.model.city,
      date_of_birth: this.model.date_of_birth,
      amulet_0: 0,
      amulet_1: 0,
      amulet_2: 0,
      amulet_3: 0,
      amulet_4: 0,
      amulet_5: 0,
    };
    result = this._firebaseService.addPlayer(newplayer); 
    console.log(result);
  }
}