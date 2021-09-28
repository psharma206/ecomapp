import { MatSidenav } from '@angular/material/sidenav';
import { NavbarOpts } from './../menubar/menubar.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() opts: NavbarOpts = {title : 'test'}
  @ViewChild('sidenav')
  sidenav: MatSidenav;

  ngOnInit() {
  
  }
  ngAfterViewInit() {
    this.opts = {
      title: "Three ChipMunks",
      hasEl: true,
      sidenav: this.sidenav
    }
  }
  toggleSidenav() {
    this.opts.sidenav?.toggle(true, "program");
  }

}
