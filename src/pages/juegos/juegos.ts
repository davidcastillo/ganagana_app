import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'juegos-page',
  templateUrl: 'juegos.html'
})
export class JuegosPage {
  selectedGame: any;
  icons: string[];
  games: Array<{title: string, gameId: string}>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
    this.selectedGame = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat'];

    this.games = [
      {
        title: 'Armar Parejas',
        gameId: 'armarparejas'
      },
      {
        title: 'Kit de la Suerte',
        gameId: 'kitdelasuerte'
      },      
    ];

   
   // for(let i = 1; i < .items.length; i++) {
     // this.items.push({
       // title: 'Item ' + i,
        // note: 'This is item #' + i,
         // icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      // });
   // }
  }

 gameTapped(event, game) {
    this.navCtrl.push(ItemDetailsPage, {
      item: game
    });
  }
}
