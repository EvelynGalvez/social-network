import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Publish } from '../interfaces/publish.interface';
import { PublicationsService } from '../services/publications.service';


@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {

  public publish: any = { };

  new: boolean = false;
  id: string;

  //publish: FormGroup;
  postList$ :AngularFireList<any>;
   //esto es del tipo observable de firebase, son asincronos con valor variable
  constructor(private formBuilder: FormBuilder, private database:AngularFireDatabase, private router: Router, public authService: AuthService, private _publicationsService: PublicationsService, private activatedRoute: ActivatedRoute ) {
    //this.createPublish();
    this.activatedRoute.params
      .subscribe( parametros => {
        this.id = parametros['id']
        if (this.id !== "new") {
          this._publicationsService.getPublish( this.id )
            .subscribe( publish => this.publish = publish)
        }

      });

    //this.postList$ = this.database.list('/posts');
   }

  ngOnInit() {
  }

  addPost(forma: NgForm) {
    //console.log(this.publish);

    if (this.id == 'new') {
      // insertando publicación
      this._publicationsService.newPublication( this.publish ).subscribe((data) => {
        console.log(data);
        console.log(data.name);
        //this.router.navigate(['/publish', data.name])
        this.router.navigate(['/publish', 'new']);
        forma.reset();
        
      }, (error) => {
        console.log(error);
      });
    } else {
      // actualizando publicación
      this._publicationsService.updatePublication( this.publish, this.id ).subscribe((data) => {
        console.log(data);        
      }, (error) => {
        console.log(error);
      });
    }
  }
/*
  addNew( forma: NgForm) {
    this.router.navigate(['/publish', 'new']);
    forma.reset();
  }*/

  
  
  /*createPublish() {
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
  }*/
}
