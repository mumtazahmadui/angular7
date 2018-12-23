import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  result:any[] = [1,2,3,4];

  constructor() { }

  ngOnInit() {
  }

}
