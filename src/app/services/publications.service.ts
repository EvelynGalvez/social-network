import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { Publish } from '../interfaces/publish.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class PublicationsService {

  publicationsUrl:string = "https://social-network-angular.firebaseio.com/publications.json";
  publishUrl = "https://social-network-angular.firebaseio.com/publications/";

  constructor( private http: Http ) { }

  newPublication( publish: Publish ) {
    let body = JSON.stringify( publish );
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.publicationsUrl, body, {headers: headers})
      .pipe(map(res=> {
        console.log(res.json());
        return res.json();
      }));

  }

  updatePublication( publish: Publish, key$:string ): Observable<any> {
    let body = JSON.stringify( publish );
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let url = `${ this.publishUrl }/${ key$ }.json`;

    return this.http.put(url, body, {headers: headers})
      .pipe(map(res=> res.json()));

  }

  getPublish( key$:string ) {
    let url = `${this.publishUrl}/${key$}.json`;
    return this.http.get( url )
      .pipe(map(res=> res.json()));
  }

  
  getPublications( ) {
    return this.http.get( this.publicationsUrl )
      .pipe(map(res=> res.json()));
  }

  deletePost(key$: string) {
    let url = `${this.publishUrl}/${key$}.json`;
    return this.http.delete(url)
      .pipe(map(res=> res.json()));
  }

}
