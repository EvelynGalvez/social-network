import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Toolbar
import {MatToolbarModule} from '@angular/material/toolbar';
//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from '../environments/environment';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { WelcomeComponent } from './welcome/welcome.component';
import { PublishComponent } from './publish/publish.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { FeedingComponent } from './feeding/feeding.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { CuidadosComponent } from './cuidados/cuidados.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { LoginCuentasComponent } from './login-cuentas/login-cuentas.component';
import { PublicationsComponent } from './publications/publications.component';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';
//Servicios
import { PublicationsService } from './services/publications.service';
import { AuthService } from './auth.service';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//pipes
import { KeysPipe } from './pipes/keys.pipe'






const appRoutes: Routes = [ // ruta + componente
  {
    path : '',//si no pone nada es la ruta principal
    component : WelcomeComponent
  },
  {
    path: 'login',
    component: WelcomeComponent
  },
  {
    path: 'alimentacion',
    component: FeedingComponent
  },
  {
    path: 'cuidados',
    component: CuidadosComponent
  },
  {
    path: 'directorio',
    component: DirectorioComponent
  },
  {
    path: 'muro',
    component: PublicationsComponent
  },
  {
    path: 'publish/:id',
    component: PublishComponent
  },
  {
    path: 'adopciones',
    component: AdoptionsComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AuthFormComponent,
    WelcomeComponent,
    PublishComponent,
    MenuComponent,
    FeedingComponent,
    CuidadosComponent,
    DirectorioComponent,
    LoginCuentasComponent,
    PublicationsComponent,
    UploadImgComponent,
    AdoptionsComponent,
    KeysPipe,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    AngularFireDatabaseModule,
    HttpModule,
  ],
  providers: [
    AuthService,
    PublicationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
