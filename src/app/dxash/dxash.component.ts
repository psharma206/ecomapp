import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dxash',
  templateUrl: './dxash.component.html',
  styleUrls: ['./dxash.component.scss']
})
export class DxashComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    let a: any = document.getElementById("aboutvideo");
    a.muted = true;
    a.play();
  }

  ngAfterViewInit() {
    let a: any = document.getElementById("aboutvideo");
    a.muted = true;
    a.play();


  }

}
