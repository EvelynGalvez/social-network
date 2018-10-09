import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  publications$:Observable<any>;

  constructor(private database:AngularFireDatabase, public authService: AuthService, private router: Router) {
    this.publications$ = this.database.list('/publications').snapshotChanges(); 
  }

  ngOnInit() {
  }

}
