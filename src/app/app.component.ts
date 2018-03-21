import {AfterContentInit, Component, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  @ViewChild('loadcontainer', {read: ViewContainerRef}) loadcontainer: ElementRef;
  currentRoute = '/login';

  /**
   *
   */
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.currentRoute = event.url;
      }
    });   
  }

  ngAfterContentInit() {
    //this.loadcontainer;
    // So far nothing to load initially.
    // once we have we idicate that service here
  }
}
