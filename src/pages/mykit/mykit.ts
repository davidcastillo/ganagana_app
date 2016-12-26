import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { KitdelasuertePage } from '../kitdelasuerte/kitdelasuerte';


@Component({
  selector: 'mykit-page',
  templateUrl: 'mykit.html'
})
export class MykitPage {
//  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    if(!this.isAlreadyLoggedIn()){
      console.log('not login yet, redirect to kitdelasuerte page');
      this.navCtrl.push(KitdelasuertePage);
    }
  }
  isAlreadyLoggedIn(){
    let user = window.localStorage.getItem('user');
    return user !== null &&  user !== undefined;
 }
}


