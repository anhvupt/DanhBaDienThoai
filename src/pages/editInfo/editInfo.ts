import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest';
import { FormBuilder, Validators } from '@angular/forms';
import {ContactInfo} from '../../models/contactInfo';
import {HomePage} from '../home/home';

@Component({
  templateUrl: 'editInfo.html'
})

export class EditInfoPage {

  contact;
  editContactForm;
  constructor(public navCtrl: NavController, navParams: NavParams, public restProvider: RestProvider, public formBuilder: FormBuilder) {

    this.contact = navParams.get('contact');
    console.log(this.contact);

    this.editContactForm = formBuilder.group({
      ID: [this.contact.ID, Validators.required],
      HoTen: [this.contact.HoTen, Validators.required],
      BietDanh: [this.contact.BietDanh, Validators.required],
      SoDienThoai: [this.contact.SoDienThoai, Validators.required],
      NgaySinh: [this.contact.NgaySinh, Validators.required],
      Email: [this.contact.Email, Validators.required],
      DiaChi: [this.contact.DiaChi, Validators.required]
    });
  }

  editContact(){
    console.log(this.editContactForm.HoTen);
    let editedContact = new ContactInfo(
      this.editContactForm.value.ID, 
      this.editContactForm.value.HoTen, 
      this.editContactForm.value.BietDanh, 
      this.editContactForm.value.NgaySinh, 
      this.editContactForm.value.SoDienThoai, 
      this.editContactForm.value.Email, 
      this.editContactForm.value.DiaChi, 
      );
    console.log(editedContact);
    this.restProvider.editContact(editedContact).then(data=>{
      console.log(data);
      if(data['statusText'] === 'OK'){
        this.goToHome();
      }
    });
  }

  goToHome(){
    this.navCtrl.push(HomePage);
  }


}
