import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest'
import { FormBuilder, Validators } from '@angular/forms';
import {HomePage} from '../home/home';

@Component({
    templateUrl: 'login.html'
})

export class LoginPage {

    loginForm: any;

    constructor(public navCtrl: NavController, public restProvider: RestProvider, formBuilder: FormBuilder) {

        this.loginForm = formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });

    }

    login(){
        console.log(this.loginForm.value.userName, this.loginForm.value.password);
        this.checkLogin(this.loginForm.value.userName, this.loginForm.value.password).then(isValid => {
            if (isValid) {
                console.log('login successfully');
                this.goToHome();
            } else {
                console.log('invalid account');
            }
        });
    }

    checkLogin(username, password) {
        return new Promise(isValid => {
            //phuong thuc checklogin cua restProvider dung authorization headers mac dinh la vupta:vupta
            //nen luon dang nhap duoc khong can biet username, password truyen vao la gi =))
            this.restProvider.checkLogin(username, password).then(data => {
                console.log(`status text: ${data['statusText']}`);
                if (data['statusText'] === 'OK') {
                    return isValid(true);
                }
                else return isValid(false);
            });
        });
    }

    goToHome(){
        this.navCtrl.push(HomePage);
    }
}