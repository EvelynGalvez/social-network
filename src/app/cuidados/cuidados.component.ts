import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cuidados',
  templateUrl: './cuidados.component.html',
  styleUrls: ['./cuidados.component.css']
})
export class CuidadosComponent implements OnInit {

  @Input() title:string;   //decorador
  @Input() image:string;
  @Input() description:string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
