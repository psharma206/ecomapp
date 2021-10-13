import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'ecommerce-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productList: any = [];

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.service.getProductList().subscribe((response) =>{
      this.productList = response;
    })
    let a: any = document.getElementById("dashvideo");
    a.muted = true;
    a.play();

  }

  ngAfterViewInit() {
    let a: any = document.getElementById("dashvideo");
    a.muted = true;
    a.play();
  }
}
