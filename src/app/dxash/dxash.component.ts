import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dxash',
  templateUrl: './dxash.component.html',
  styleUrls: ['./dxash.component.scss']
})
export class DxashComponent implements OnInit {
  @ViewChild('aboutvideo') aboutvideo: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.aboutvideo.nativeElement?.play();
  }

}
