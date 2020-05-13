import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest'
import {EditInfoPage} from '../editInfo/editInfo'
import {HomePage} from '../home/home'

@Component({
  templateUrl: 'detailInfo.html'
})

export class DetailInfoPage {

  contact: any;
  constructor(public navCtrl: NavController, navParams: NavParams, public restProvider: RestProvider ) {
    this.contact = navParams.get('contact');
  }

  goToEditInfo(){
    this.navCtrl.push(EditInfoPage, {contact:this.contact});
  }
  goToHome(){
    this.navCtrl.push(HomePage);
  }
  deleteInfo(){
    this.restProvider.deleteContact(this.contact.ID).then(data=>{
      console.log(data);
      //check if successfully deleted
      if(data['statusText'] === 'OK'){
        this.goToHome();
      }
    })
  }
}
