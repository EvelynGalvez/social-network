import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-login-cuentas',
  templateUrl: './login-cuentas.component.html',
  styleUrls: ['./login-cuentas.component.css']
})
export class LoginCuentasComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router, private activatedRoute: ActivatedRoute, private database:AngularFireDatabase,) { }

  ngOnInit() {
  }

  onClickFacebookLogin() {
    this.authService.loginFacebook()
    .then((res)=> {
      this.router.navigate(['/publish', 'new']);
      location.reload();
    }).catch( err => console.log(err.message));
  }

  onClickGoogleLogin() {
    this.authService.loginGoogle()
    .then((res)=> {
      this.router.navigate(['/publish', 'new']);
      location.reload();
    }).catch( err => console.log(err.message));
  }  
}
