import { Component, OnInit} from '@angular/core';
//import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { AuthService } from '../auth.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {

  publish: FormGroup;
  postList$ :AngularFireList<any>;

  constructor(private database:AngularFireDatabase, private formBuilder: FormBuilder) { 
    this.createPublish(); 
    //hacemos una consulta a la base de datos
    this.postList$ = this.database.list('/posts');
  }

  ngOnInit() {
  }
  
  createPublish() {
    this.publish = this.formBuilder.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addPost() { 
    const newPost = { //tipo inferido
      image: this.publish.value.image,
      description: this.publish.value.description,
    };

    this.postList$.push(newPost);//esto agrega un nuevo post
    this.publish.reset();
  }

}