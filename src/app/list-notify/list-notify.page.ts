import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-notify',
  templateUrl: './list-notify.page.html',
  styleUrls: ['./list-notify.page.scss'],
})
export class ListNotifyPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closePage(){
    this.router.navigate(['members/tab3']);
  }

}
