import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import 'rxjs/add/operator/map';
import { Players } from '../entities/Players';

@Injectable()
export class FirebaseService{
  players: FirebaseListObservable<any>;
  player = {};
  status= {}

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

  soyUnmetodo(){
    console.log("vengo desde firebase service")
    }


/*
  sessionvalidation(){
    this.isAlreadyLoggedIn()


    if(this.isAlreadyLoggedIn()){
      console.log("logged");
    } 
    else{
      console.log("no logged");
    }
}*/

 isAlreadyLoggedIn(){
      let isAuthenticated = false
      let how = false
      /*window.localStorage.getItem('isAuthenticated');*/
      if (how == isAuthenticated){
        return true;
      }
      else{
        return false;
      }
      
  }
}










/*

  getPlayers(){
    this.players = this.angFire.database.list('/Players') as
    FirebaseListObservable<any>
    return this.players;
  }

  addPlayer(player: Players): firebase.Promise <any> {
    console.log("servira");
    return this.players.push(this.player);
  }

  isAlreadyLoggedIn(){
      let isAuthenticated = window.localStorage.getItem('isAuthenticated');
      if (isAuthenticated == "yes"){
      return true;
      }
      return false;
  }

   createsesion() {
            console.log("mi metodo se ejecuto")
       window.localStorage.setItem('isAuthenticated',"yes");
  }

  onFacebookLogin(e){
    let self = this;
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    }).then(function(response){
    let user = {
        email:response.auth.email,
        picture:response.auth.photoURL
        };
    window.localStorage.setItem('user',JSON.stringify(user));
    self.navCtrl.pop();
    }).catch(function(error){
    console.log(error);
    });
    }



}

*/