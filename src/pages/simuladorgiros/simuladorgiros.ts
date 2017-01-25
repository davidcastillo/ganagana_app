import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { IonicModule } from 'ionic-angular';

import { NavController, NavParams } from 'ionic-angular';

import { SimuladoresultsPage } from '../simuladoresults/simuladoresults';



@Component({
  selector: 'simuladorgiros-page',
  templateUrl: 'simuladorgiros.html'
})
export class SimuladorgirosPage {
  selectedOption: string;
  options:Array<Object> = [
      {cost: '$4.700', range: "Desde $0 a $50.000"},
      {cost: '$6.000', range: "Desde $50.001 a $100.000"},
      {cost: '$7.500', range: "Desde $100.001 a $150.000"},
      {cost: '$8.300', range: "Desde $150.001 a $200.000"},
      {cost: '$8.900', range: "Desde $200.001 a $250.000"},
      {cost: '$9.400', range: "Desde $250.001 a $300.000"},
      {cost: '$9.900', range: "Desde $300.001 a $350.000"},
      {cost: '$10.400', range: "Desde $350.001 a $400.000"},
      {cost: '$11.700', range: "Desde $400.001 a $450.000"},
      {cost: '$13.000', range: "Desde $450.001 a $500.000"},
      {cost: '2.7%', range: "Desde $500.001 en adelante"},
  ];

  toCost(){
    this.selectedOption = this.selectedOption;
  }
}