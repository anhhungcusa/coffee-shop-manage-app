import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    console.log(this.afAuth.user);
  }
  login2() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    console.log(this.afAuth);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
