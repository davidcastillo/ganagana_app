import {Component} from '@angular/core';
import {NavController, AlertController, LoadingController} from 'ionic-angular';
import {FirebaseAuth, AuthProviders, AuthMethods} from 'angularfire2';
import {HomePage} from '../home/home';
 
@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  loader: any;
  user = {email: '', password: ''};
 
  constructor(public nav: NavController, public auth: FirebaseAuth, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}
 
  public registerUser() {
    this.showLoading()
 
    this.auth.createUser(this.user).then((authData) => {
      setTimeout(() => {
        this.loader.dismiss();
      });
      let prompt = this.alertCtrl.create({
        title: 'Success',
        subTitle: 'Your new Account was created!',
        buttons: ['OK']
      });
      prompt.present();
    }).catch((error) => {
      this.showError(error);
    });
  }
  public login() {
    this.showLoading()
    this.auth.login(this.user, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
    }).then((authData) => {
       this.createsesion()
       this.loader.dismiss();
       this.nav.setRoot(HomePage);
    }).catch((error) => {this.showError(error);});
  }
  showLoading() {
    this.loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loader.present();
  }
 
  showError(text) {
        setTimeout(() => {
        this.loader.dismiss();
    });
    let prompt = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    prompt.present();
  }

    createsesion() {
        console.log("mi metodo se ejecuto")
        window.localStorage.setItem('isAuthenticated',"yes");
  }

    isAlreadyLoggedIn(){
        let isAuthenticated = window.localStorage.getItem('isAuthenticated');
        if (isAuthenticated == "yes"){
        return true;
        }
        return false;
    }





}