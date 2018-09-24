import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-cuentas',
  templateUrl: './login-cuentas.component.html',
  styleUrls: ['./login-cuentas.component.css']
})
export class LoginCuentasComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onClickFacebookLogin() {
    this.authService.loginFacebook()
    .then((res)=> {
      console.log('usuario autenticado con facebook');
      console.log(res);
      this.router.navigate(['/muro']);
    }).catch( err => console.log(err.message));
  }

  onClickGoogleLogin() {
    this.authService.loginGoogle()
    .then((res)=> {
      console.log('usuario autenticado con google');
      console.log(res);
      this.router.navigate(['/muro']);
    }).catch( err => console.log(err.message));
  }  
}
