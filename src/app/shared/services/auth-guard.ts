import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthServiceService} from "./auth-service.service";
import {Observable} from "rxjs";

@Injectable()

export class AuthActivate implements CanActivate {
  constructor(private authService: AuthServiceService, private router: Router) {
  }

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean>|Promise<boolean>|boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/');
    }
    return true;
  }
}
