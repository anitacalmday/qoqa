import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
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

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) {}

  ngOnInit() {
    console.log("calling ngOnInit in login app-main-nav.ts")

    this.user = this.authService.getTestValue()
    // this.user = this.authService.getUserDetails()
    console.log(this.user)
  }


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

}
