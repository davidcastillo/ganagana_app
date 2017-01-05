import { Component } from '@angular/core';


@Component({
  selector: 'numerologia-page',
  templateUrl: 'numerologia.html'
})
export class NumerologiaPage {
  private button2: true;



  constructor() {}


  public activateButtons(){
    console.log("debe activar botones");
     this.button2 = true;
}




  }

