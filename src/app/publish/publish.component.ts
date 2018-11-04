import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Publish } from '../interfaces/publish.interface';
import { PublicationsService } from '../services/publications.service';
import { ResourceLoader } from '@angular/compiler';


@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {

  private publish:Publish = {
    title: '',
    description: ''
  }

  new:boolean = false;
  id:string

  //publish: FormGroup;
  postList$ :AngularFireList<any>;
   //esto es del tipo observable de firebase, son asincronos con valor variable
  constructor(private formBuilder: FormBuilder,
              private database:AngularFireDatabase,
              private router: Router, 
              public authService: AuthService, 
              private _publicationsService: PublicationsService, 
              private activatedRoute: ActivatedRoute ) {
    //this.createPublish();
    this.activatedRoute.params
      .subscribe( parametros => {
        this.id = parametros['id'];
        if (this.id !== 'new') {
          this._publicationsService.getPublish(this.id)
          .subscribe( publish => this.publish = publish )
        }
       

      });

    //this.postList$ = this.database.list('/posts');
   }

  ngOnInit() {
  }

  addPost(forma: NgForm) {
    console.log(this.publish);

    if (this.id == "new") {
      //insertando
      this._publicationsService.newPublication(this.publish)
      .subscribe(data => {
        this.router.navigate(['/publish', 'new']);
        forma.reset();
        location.reload();
      }, 
      error => console.log(error));
    } else {
      //actualizando
      this._publicationsService.updatePublication(this.publish, this.id)
      .subscribe(data => {
        this.router.navigate(['/publish', 'new']);
        forma.reset();
        location.reload();
      }, 
      error => console.log(error));
    }    
  }

}
