import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post;
  @Input() postId;
  @Input() key;
  editContent: FormGroup;

  constructor(public authService: AuthService, private database: AngularFireDatabase) { }

  ngOnInit() {
  }

  edit(key, object) {
  }


  delete(key) {
    if (confirm('Estas seguro de eliminar esta publicación?')) {
    this.database.object(`posts/${key}`).remove();
    }
  }
}
