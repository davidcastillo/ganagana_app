import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { NumresultsPage } from '../numresults/numresults';


@Component({
  selector: 'astrologia-page',
  templateUrl: 'astrologia.html'
})
export class AstrologiaPage {
  numresultsPage = NumresultsPage
  constructor() {

  }
}