import { MatSidenav } from '@angular/material/sidenav';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  @Input() opts: NavbarOpts = { title: '' };
  url: string = '';

  constructor(private router: Router) { }

  toggleSidenav() {
    this.opts.sidenav?.toggle(true, "program");
  }
  ngOnInit() {
    this.url = document.URL;
  }

  login = () => {
    this.router.navigate(['login'])
  }

}
export interface NavbarOpts {
  /**
   * The title of the solution
   */
  title: string;

  /**
   * Whether the navbar should have an elevation (z3)
   */
  hasEl?: boolean;
  /**
   * Sets the colour of the toolbar (Default is "primary")
   * NOTE: Since "none" is an invalid value, it won't give any colour to the toolbar
   */
  color?: "primary" | "accent" | "warn" | "none";
  /**
   * The sidenav to pass in
   */
  sidenav?: MatSidenav;
}
