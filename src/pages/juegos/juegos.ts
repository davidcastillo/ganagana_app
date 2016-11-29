import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ArmarparejasPage } from '../armarparejas/armarparejas';
import { KitdelasuertePage } from '../kitdelasuerte/kitdelasuerte';


@Component({
  selector: 'juegos-page',
  templateUrl: 'juegos.html'
})
export class JuegosPage {
  selectedGame: any;
  icons: string[];
  games: Array<{title: string, gameId: string, descripcion: string,}>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
    this.selectedGame = navParams.get('item');

    this.games = [
      {
        title: 'Armar Parejas',
        gameId: 'armarparejas',
        descripcion: 'este es el juego para encontrar parejas y ejercitar la mente'
      },
      {
        title: 'Kit de la Suerte',
        gameId: 'kitdelasuerte',
        descripcion: 'este juego se parece a capturar pokemones'
      },      
    ];
  }

  gamesTapped(event, game) {
    console.log(game.descripcion)
    console.log(event.isTrusted)
    //if(event.isTrusted){
    // alert("si estoy funcionando");
    //}}

    let gametoShow : any;

      switch(game.gameId) {
        case 'armarparejas':
             gametoShow = ArmarparejasPage;
             break;
        case 'kitdelasuerte':
             gametoShow = KitdelasuertePage;
             break;
        default:
            console.log("none item selected");
      }
   


    
    //if(game.gameId == 'armarparejas'){
    //  gametoShow = ArmarparejasPage;
  //  } else if(game.gameId == 'kitdelasuerte'){
  //    gametoShow = KitdelasuertePage;
  //  } 

    this.navCtrl.push(gametoShow, {
      item: game
    });
  }
}







   
   // for(let i = 1; i < .items.length; i++) {
     // this.items.push({
       // title: 'Item ' + i,
        // note: 'This is item #' + i,
         // icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      // });
   // }