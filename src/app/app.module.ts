import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { JuegosPage } from '../pages/juegos/juegos';
import { NumerologiaPage } from '../pages/numerologia/numerologia';
import { AstrologiaPage } from '../pages/astrologia/astrologia';
import { ResultadosPage } from '../pages/resultados/resultados';
import { SimuladorgirosPage } from '../pages/simuladorgiros/simuladorgiros';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemDetailsPage,
    JuegosPage,
    NumerologiaPage,
    AstrologiaPage,
    ResultadosPage,
    SimuladorgirosPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemDetailsPage,
    JuegosPage,
    NumerologiaPage,
    AstrologiaPage,
    ResultadosPage,
    SimuladorgirosPage
  ],
  providers: []
})
export class AppModule {}
