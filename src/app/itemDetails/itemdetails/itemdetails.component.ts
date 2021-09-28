import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecommerce-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.scss']
})
export class ItemdetailsComponent implements OnInit {
  selected = '';
  constructor() { }

  ngOnInit(): void {
  }

}
