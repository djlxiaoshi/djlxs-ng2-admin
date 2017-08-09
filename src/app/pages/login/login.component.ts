import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  display:boolean = true;
  fastLoginConfig = [
    {src: '../../../assets/images/qq.jpg', title: 'QQ登录'  },
    {src:  '../../../assets/images/weixin.jpg', title: '微信登录'  },
    {src:  '../../../assets/images/weibo.jpg', title: '微博登录'  },
  ];
  constructor() { }

  ngOnInit() {
  }

}
