import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Username:string;
  Password:string;
  userDoc;
  
  constructor(private router: Router,private fireStore: AngularFirestore) { 
    this.ngOnInit();

  }

  menu(){

    console.log(this.Username);
    console.log(this.Password);
  //  this.router.navigate(['members']);
  }
  
  forget(){
    this.router.navigate(['forget']);
  }

  ngOnInit() {
    this.userDoc = this.fireStore.collection<any>('Admin',ref => ref);
    console.log(this.userDoc);
  }

}
