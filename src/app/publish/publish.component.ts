import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {
  publish: FormGroup;
  postList$ :AngularFireList<any>;
   //esto es del tipo observable de firebase, son asincronos con valor variable
  constructor(private formBuilder: FormBuilder, private database:AngularFireDatabase, private router: Router, public authService: AuthService) {
    this.createPublish();
    this.postList$ = this.database.list('/posts');
   }

  ngOnInit() {
  }
  
  createPublish() {
    this.publish = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addPost() { 
    const newPost = { 
      title: this.publish.value.title,
      description: this.publish.value.description,
    };

    this.postList$.push(newPost);//esto agrega un nuevo post
    this.publish.reset();
  }
}
