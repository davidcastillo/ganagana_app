import { Component, ElementRef,OnInit } from '@angular/core';
import { AngularFire,AuthProviders,AuthMethods } from 'angularfire2';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from '../../app/services/firebase.service';
import { Players } from '../../app/entities/Players';


@Component({
  selector: 'kitdelasuerte-page',
  templateUrl: 'kitdelasuerte.html',
  providers: [FirebaseService]

})
export class KitdelasuertePage implements OnInit{
  selectedItem: any;
  root: any;
  user = {email: '', password: ''};

  constructor(private _firebaseService: FirebaseService, public navCtrl: NavController, public navParams: NavParams, public element: ElementRef, public af: AngularFire) {
    this.selectedItem = navParams.get('item');
  }

ngOnInit(){
  this.root = this.element.nativeElement;
  var loginBtn = this.root.querySelector('#loginBtn');
  var fbBtn =  this.root.querySelector('#fb-login');
  loginBtn.addEventListener('click',this.onClick.bind(this));
  fbBtn.addEventListener('click',this.onFacebookLogin.bind(this));
  }

onClick(e){
  console.log("1");
  let self = this;
  //let email:string = this.root.querySelector('#email').value;
  //let password:string = this.root.querySelector('#password').value;
  console.log(this.user);
  //console.log(email);
 // console.log(password);
  this.af.auth.login({
    email: this.user.email,
    password: this.user.password
  },{
    provider: AuthProviders.Password,
    method: AuthMethods.Password,
  }).then(function(response){
    let user = {
      email:response.auth.email,
      picture:response.auth.photoURL
    };
    self.navCtrl.pop();
  }).catch(function(error){
    console.log(error);
  });
  }

onFacebookLogin(e){
  let self = this;
  this.af.auth.login({
    provider: AuthProviders.Facebook,
    method: AuthMethods.Popup
  }).then(function(response){
  let user = {
      email:response.auth.email,
      picture:response.auth.photoURL
      };
  window.localStorage.setItem('user',JSON.stringify(user));
  self.navCtrl.pop();
  }).catch(function(error){
  console.log(error);
  });
  }
}