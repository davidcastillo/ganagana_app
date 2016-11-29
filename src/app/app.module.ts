import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArmarparejasPage } from '../pages/armarparejas/armarparejas';
import { KitdelasuertePage } from '../pages/kitdelasuerte/kitdelasuerte';
import { JuegosPage } from '../pages/juegos/juegos';
import { NumerologiaPage } from '../pages/numerologia/numerologia';
import { AstrologiaPage } from '../pages/astrologia/astrologia';
import { ResultadosPage } from '../pages/resultados/resultados';
import { SimuladorgirosPage } from '../pages/simuladorgiros/simuladorgiros';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArmarparejasPage,
    JuegosPage,
    NumerologiaPage,
    AstrologiaPage,
    ResultadosPage,
    SimuladorgirosPage,
    KitdelasuertePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArmarparejasPage,
    JuegosPage,
    NumerologiaPage,
    AstrologiaPage,
    ResultadosPage,
    SimuladorgirosPage,
    KitdelasuertePage
  ],
  providers: []
})
export class AppModule {}
