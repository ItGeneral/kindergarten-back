import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterState, RouterStateSnapshot} from '@angular/router';
import {User} from './util/model/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ){}

  private showBar: boolean;

  private currentUser: User = new User();

  ngOnInit(): void {
    console.log(this.router.url);

    let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    let routerState: RouterState = this.router.routerState;
    let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

    console.log(activatedRouteSnapshot);
    console.log(routerState);
    console.log(routerStateSnapshot);

    this.judgeLogin();

  }

  public judgeLogin(): void {
    /*获取当前登录对象*/
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser != null && this.currentUser.userName !== '' && this.currentUser.userName != null) {
      this.showBar = true;
    }else {
      this.showBar = false;
    }
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/');
  }


}
