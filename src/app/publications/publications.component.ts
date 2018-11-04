import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { PublicationsService } from '../services/publications.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  publications:any;

  constructor(private database:AngularFireDatabase, 
              public authService: AuthService, 
              private router: Router, 
              private _publicationsService: PublicationsService) {

    this._publicationsService.getPublications()
      .subscribe( data => {
        console.log(data);

        this.publications = data;
      })
    //this.publications$ = this.database.list('/publications').snapshotChanges(); 
  }

  ngOnInit() {
  }

  deletePublish(key$: string) {
    this._publicationsService.deletePost(key$)
      .subscribe( res => {
        if ( res ) {
          console.error(res);
        } else {
          //todo bien
          delete this.publications[key$];
        }
      })
  }

}
