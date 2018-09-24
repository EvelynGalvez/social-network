import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InterPet';

  constructor(private router: Router, private authService: AuthService) {}

  goToNew() {
    this.router.navigate(['/new']);
  }
}




