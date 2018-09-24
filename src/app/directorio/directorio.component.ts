import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit {

  @Input() title:string;   //decorador
  @Input() image:string;
  @Input() description:string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
