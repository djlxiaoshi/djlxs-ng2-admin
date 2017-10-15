/**
 * Created by DJL箫氏 on 2017/9/23.
 */
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class CanActiveService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, routeState: RouterStateSnapshot) {
    console.log('CanActivate');
    console.log('activeRouteSnapshot', route);
    console.log('RouterStateSnapshot', routeState);
    const flag = route.queryParams['flag'];
    // 这里是根据激活路由的一些状态来进行判断，
    // 当然我们也可以根据异步获取的一些数据来判断，比如判断这个人是不是管理员等等。
    if (flag.toString() === 'true') {
      return true;
    } else {
      return false;
    }
  }
}
