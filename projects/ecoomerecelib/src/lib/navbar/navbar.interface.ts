export interface NavbarOpts1 {
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
    color?: "primary"|"accent"|"warn"|"none";
    /**
     * The sidenav to pass in
     */
    sidenav: any;
  }