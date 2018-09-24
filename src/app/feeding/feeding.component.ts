import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feeding',
  templateUrl: './feeding.component.html',
  styleUrls: ['./feeding.component.css']
})
export class FeedingComponent implements OnInit {

  @Input() title:string;   //decorador
  @Input() image:string;
  @Input() description:string;

  constructor() { }

  ngOnInit() {
  }

}
