import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth:AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  loginGoogle() {
    return this.firebaseAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider() );
  }

  signup(email:string, password:string){
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }

  login(email:string, password:string){
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.firebaseAuth.auth.signOut()
  }
}