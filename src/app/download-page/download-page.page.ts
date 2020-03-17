import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-download-page',
  templateUrl: './download-page.page.html',
  styleUrls: ['./download-page.page.scss'],
})
export class DownloadPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closePage(){
    this.router.navigate(['members/tab2']);
  }

}
