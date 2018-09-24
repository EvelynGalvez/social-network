import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  posts$:Observable<any>;

  constructor(private database:AngularFireDatabase) {
    this.posts$ = this.database.list('/posts').valueChanges(); 
  }

  ngOnInit() {
  }

}
