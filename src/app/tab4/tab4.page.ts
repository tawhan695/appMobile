import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['']);
  }
  
  edit(){
    this.router.navigate(['user']);
  }

}
