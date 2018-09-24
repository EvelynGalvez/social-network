import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-cuentas',
  templateUrl: './login-cuentas.component.html',
  styleUrls: ['./login-cuentas.component.css']
})
export class LoginCuentasComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
