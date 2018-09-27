import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-feeding',
  templateUrl: './feeding.component.html',
  styleUrls: ['./feeding.component.css']
})
export class FeedingComponent implements OnInit {

  @Input() title:string;   //decorador
  @Input() image:string;
  @Input() description:string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
