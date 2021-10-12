import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'ecommerce-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productList: any = [];
  @ViewChild('dashvideo') dashvideo: ElementRef;

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.service.getProductList().subscribe((response) =>{
      this.productList = response;
    })

  }

  ngAfterViewInit() {
    this.dashvideo.nativeElement?.play();
  }
}
