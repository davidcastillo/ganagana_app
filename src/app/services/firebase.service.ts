import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import 'rxjs/add/operator/map';
import { Players } from '../entities/Players';

@Injectable()
export class FirebaseService{
  players: FirebaseListObservable<any>;
  player = {}

  constructor(private angFire: AngularFire) {
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
    this.players = angFire.database.list('/Players');
  }

  getPlayers(){
    this.players = this.angFire.database.list('/Players') as
    FirebaseListObservable<any>
    return this.players;
  }

  addPlayer(player: Players): firebase.Promise <any> {
    console.log("servira");
    return this.players.push(this.player);
  }
}

