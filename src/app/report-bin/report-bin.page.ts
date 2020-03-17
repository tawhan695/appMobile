import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-bin',
  templateUrl: './report-bin.page.html',
  styleUrls: ['./report-bin.page.scss'],
})
export class ReportBinPage implements OnInit {

  list = {
    item: ''
    
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  type(){
    
    console.log(this.list.item);
    if(this.list.item == "ข้อมูลปริมาณขยะแต่ละประเภท"){
      // console.log(1);
      this.router.navigate(['chart-type-bin']);
    }
    if(this.list.item == "ข้อมูลขยะรีไซเคิล"){
      // console.log(2);
      this.router.navigate(['chart-recycle']);
    }
    if(this.list.item == "ข้อมูลขยะตามช่วงเวลา"){
      // console.log(3);
      this.router.navigate(['chart-time']);
    }
  }

  closePage(){
    this.router.navigate(['members/tab2']);
  }


}
