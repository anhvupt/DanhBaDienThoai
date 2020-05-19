import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest';
import { FormBuilder, Validators } from '@angular/forms';
import {ContactInfo} from '../../models/contactInfo';
import {HomePage} from '../home/home';

@Component({
  templateUrl: 'addContact.html'
})

export class AddContactPage {

  contact;
  addContactForm;
  constructor(public navCtrl: NavController, navParams: NavParams, public restProvider: RestProvider, public formBuilder: FormBuilder) {

    this.addContactForm = formBuilder.group({
      ID: ['', Validators.required],
      HoTen: ['', Validators.required],
      BietDanh: ['', Validators.required],
      SoDienThoai: ['', Validators.required],
      NgaySinh: ['', Validators.required],
      Email: ['', Validators.required],
      DiaChi: ['', Validators.required]
    });
  }

  addContact(){
    let newContact = new ContactInfo(
      0, 
      this.addContactForm.value.HoTen, 
      this.addContactForm.value.BietDanh, 
      this.addContactForm.value.NgaySinh, 
      this.addContactForm.value.SoDienThoai, 
      this.addContactForm.value.Email, 
      this.addContactForm.value.DiaChi, 
      );

    this.restProvider.addContact(newContact).then(data=>{
      console.log(data);
      if(data['statusText'] === 'OK'){
        this.goToHome();
      }
    })
  }

  goToHome(){
    this.navCtrl.push(HomePage);
  }

}
