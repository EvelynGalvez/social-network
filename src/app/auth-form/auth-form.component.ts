import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  authForm: FormGroup;

  //Solicitamos en el constructor todas las cosas necesarias 
  constructor(private formBuilder: FormBuilder, private authService: AuthService, public snackBar: MatSnackBar) {
    this.createAuthForm();
  }

  ngOnInit() {
  }

  createAuthForm() {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }

  /*
   * Instalé un módulo para hacer snackbars desde material.angular.io :
   * MatSnackBarModule
   */
  onRegister() {
    this.authService.signup(this.authForm.value.email, this.authForm.value.password)
      .then(() => {
        //Registro exitoso, celebremos esto!
      })
      .catch(() => {
        //Algo salió mal, avisemos mejor para que reintente
        this.snackBar.open('Error de registro, trata otra vez'
          , null/*No necesitamos botón en el aviso*/
          , {
            duration: 3000
          });
      });
  }

  onLogin() {
    this.authService.login(this.authForm.value.email, this.authForm.value.password)
      .then(() => {
        //Login exitoso, así que celebramos con el usuario (?)
      })
      .catch(() => {
        //Algo salió mal, avisemos mejor para que reintente
        this.snackBar.open('Error al tratar de iniciar sesión, trata otra vez'
          , null/*No necesitamos botón en el aviso*/
          , {
            duration: 3000
          });
      });
  }


}