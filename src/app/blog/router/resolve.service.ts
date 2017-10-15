/**
 * Created by DJL箫氏 on 2017/9/24.
 */
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router} from '@angular/router';
import {Injectable} from '@angular/core';


@Injectable()

export class ResolveGuard implements Resolve<any> {
  constructor(private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('ResolveGuard');
    console.log('queryParams', route.queryParams);
    const flag = route.queryParams['flag'];
    if (flag.toString() === 'true') {
      return {dream: 'DJL箫氏'};
    } else {
      this.router.navigateByUrl('blog/router');
      return ;
    }
  }
}
