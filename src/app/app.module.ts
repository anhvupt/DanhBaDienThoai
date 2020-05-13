import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';

import {RestProvider} from '../providers/rest';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailInfoPage } from '../pages/detailInfo/detailInfo';
import { EditInfoPage } from '../pages/editInfo/editInfo';
import { LoginPage } from '../pages/login/login';
import {AddContactPage} from '../pages/addContact/addContact';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailInfoPage,
    EditInfoPage,
    LoginPage,
    AddContactPage,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailInfoPage,
    EditInfoPage,
    LoginPage,
    AddContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RestProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
