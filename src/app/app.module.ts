import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage} from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ArmarparejasPage } from '../pages/armarparejas/armarparejas';
import { KitdelasuertePage } from '../pages/kitdelasuerte/kitdelasuerte';
import { JuegosPage } from '../pages/juegos/juegos';
import { NumerologiaPage } from '../pages/numerologia/numerologia';
import { AstrologiaPage } from '../pages/astrologia/astrologia';
import { ResultadosPage } from '../pages/resultados/resultados';
import { SimuladorgirosPage } from '../pages/simuladorgiros/simuladorgiros';
import { InstruccionesPage } from '../pages/instrucciones/instrucciones';
import { MykitPage } from '../pages/mykit/mykit';
import { NumresultsPage } from '../pages/numresults/numresults';
import { SimuladoresultsPage }  from '../pages/simuladoresults/simuladoresults';
import { AngularFireModule } from 'angularfire2';
import { FormsModule} from '@angular/forms';
//import { FirebaseService } from '../app/services/firebase.service';


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
    LoginPage,
    ArmarparejasPage,
    JuegosPage,
    NumerologiaPage,
    AstrologiaPage,
    ResultadosPage,
    SimuladorgirosPage,
    KitdelasuertePage,
    InstruccionesPage,
    MykitPage,
    NumresultsPage,
    SimuladoresultsPage,
 //   FirebaseService
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
    LoginPage,
    ArmarparejasPage,
    JuegosPage,
    NumerologiaPage,
    AstrologiaPage,
    ResultadosPage,
    SimuladorgirosPage,
    KitdelasuertePage,
    InstruccionesPage,
    MykitPage,
    NumresultsPage,
    SimuladoresultsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
