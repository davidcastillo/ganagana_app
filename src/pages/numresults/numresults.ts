import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'numresults-page',
  templateUrl: 'numresults.html'
})

export class NumresultsPage implements OnInit{
  numrandom: number;

  constructor() {

  }

  ngOnInit(){
    console.log('se esta ejecutando el metodo');
    this.generatePIN();    
  }

  generatePIN(){
        console.log('se esta ejecutando el metodo');
        this.numrandom = Math.floor(Math.random() * 9999) + 1000;
  }
}