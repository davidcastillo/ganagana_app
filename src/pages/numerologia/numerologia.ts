import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { NumresultsPage } from '../numresults/numresults';



@Component({
  selector: 'numerologia-page',
  templateUrl: 'numerologia.html'
})
export class NumerologiaPage {
  numresultsPage = NumresultsPage
  //disabled: boolean = true;
  isPushed: string = "disable";


  constructor() {}


  public activateButtons(){
    console.log("debe activar botones");
    //this.disabled = false; 
    //document.getElementById('one').removeAttribute('disabled');
   // document.getElementById('two').removeAttribute('disabled');
   // document.getElementById('three').removeAttribute('disabled');
    this.isPushed = "";
  }

  }

            












