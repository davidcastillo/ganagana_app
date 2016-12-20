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
import { InstruccionesPage } from '../pages/instrucciones/instrucciones';
import { AngularFireModule } from 'angularfire2';
import { FormsModule} from '@angular/forms';


export const firebaseConfig = {

    apiKey: "AIzaSyDfi3aeYqUL-I1pC_kR5l7es7Sd9t_nsyQ",
    authDomain: "ganaganadb.firebaseapp.com",
    databaseURL: "https://ganaganadb.firebaseio.com",
    storageBucket: "ganaganadb.appspot.com",
    messagingSenderId: "928922388579"
};

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
    KitdelasuertePage,
    InstruccionesPage
  ],
  imports: [
      IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(firebaseConfig),
      FormsModule
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
    KitdelasuertePage,
    InstruccionesPage
  ],
  providers: []
})
export class AppModule {}
