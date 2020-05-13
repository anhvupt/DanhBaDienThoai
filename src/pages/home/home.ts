import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest'
import { DetailInfoPage } from '../detailInfo/detailInfo';
import { AddContactPage} from '../addContact/addContact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  contacts;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getContact();

    this.contacts = [
      {
        "HoTen": "...",
        "SoDienThoai": "",
      },
    ]
  }

  goToDetailInfo(id) {
    this.restProvider.getContactByID(id).then(data=>{
      this.navCtrl.push(DetailInfoPage, {contact : data});
    });
  }
  goToAddContact(){
    this.navCtrl.push(AddContactPage);
  }

  getContact() {
    this.restProvider.getContact().then(data => {
      this.contacts = data;
      console.log(this.contacts);
    })
  }
}
