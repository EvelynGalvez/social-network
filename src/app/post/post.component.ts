import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
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
  @Input() likes : number = 0
  @Input() key;
  editContent: FormGroup;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  constructor(public authService: AuthService, private database: AngularFireDatabase) { }

  ngOnInit() {
  }

  edit(key, object) {
  }

  addLike() {
    this.likes++;
  }


  delete(key) {
    if (confirm('Estas seguro de eliminar esta publicación?')) {
    this.database.object(`posts/${key}`).remove();
    }
  }
}
