import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post;
  @Input() key;

  constructor(public authService: AuthService, private database: AngularFireDatabase) { }

  ngOnInit() {
  }

  edit(key, object) {
    this.database.object(`posts/${key}`).update(object);
  }

  delete(key) {
    if (confirm('Estas seguro de eliminar esta publicación?')) {
    this.database.object(`posts/${key}`).remove();
    }
  }
 
}
