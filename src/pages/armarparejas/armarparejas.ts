import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { InstruccionesPage } from '../instrucciones/instrucciones';


@Component({
  selector: 'armarparejas-page',
  templateUrl: 'armarparejas.html'
})
export class ArmarparejasPage {
  instruccionesPage = InstruccionesPage

constructor(){

  }
}





  //selectedButton: any;
  //buttons: Array<{title: string, buttonId: string, descripcion: string,}>;


  //constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
   // this.selectedButton = navParams.get('button');

  //this.buttons = [
    //    {
     //     title: 'Intrucciones',
    //      buttonId: 'instrucciones',
    //      descripcion: 'lleva a las instrucciones'
    //    },
    //  ]; 
   // }

//buttonTapped(event, button) {
 // console.log(button.buttonId)




//let goToInstruccionesPage : any;

   //   switch(button.buttonId) {
   //     case 'instrucciones':
   //          goToInstruccionesPage = InstruccionesPage;
   //          break;
   //     default:
   //         console.log("none item selected");
    //  }

    //push another page onto the history stack
    //causing the nav controller to animate the new page in
   // this.navCtrl.push(goToInstruccionesPage, {
  //    button: button
 //   });
 // }

//}



