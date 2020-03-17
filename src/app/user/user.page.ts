import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalsPage } from '../modals/modals.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  

  constructor(private modalController: ModalController,private router: Router) { }

  ngOnInit() {
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalsPage
    });
    return await modal.present();
  }
  closePage(){
    this.router.navigate(['members/tab4']);
  }
  

}
