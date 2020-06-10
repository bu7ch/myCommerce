import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth : AngularFireAuth) { }

  login() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
}
