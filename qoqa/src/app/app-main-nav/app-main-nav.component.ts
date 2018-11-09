import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './app-main-nav.component.html',
  styleUrls: ['./app-main-nav.component.css'],
})
export class AppMainNavComponent implements OnInit {

  public user = false;

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    console.log("calling ngOnInit in login app-main-nav.ts")

    this.user = true // this.authService.getTestValue()
    // this.user = this.authService.getUserDetails()


    // To navigate to login if not logged in

    // !!! Uncomment the if statement to turn on the authorization features
    // !!! They are currently commented for debugging reasons.

    if (!this.user) {
      this.router.navigate(['login'])
    }
    
    console.log("user: " + this.user)
  }


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

}
