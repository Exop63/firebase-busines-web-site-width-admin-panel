import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthProvider } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<firebase.User | null>;
  user!: firebase.User | null;
  constructor(public angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
    this.userData.subscribe(value => {
      this.user = value;
    });
  }

  // Auth logic to run auth providers
  AuthLogin(email: string, password: string) {
    return this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: 'Giriş Başarısız!',
          text: 'Lürfen bilgilerinizi kontrol ediniz.',
          icon: 'error',
          confirmButtonText: 'Tamam'
        })
      });
  }
}
