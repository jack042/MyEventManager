import firebase from 'firebase';

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    firebase.initializeApp({
      apiKey: "AIzaSyCyKzqdXO-wr3lgxPtf5CXG_wImnUMjqMM",
      authDomain: "myeventmanager-b6085.firebaseapp.com",
      databaseURL: "https://myeventmanager-b6085.firebaseio.com",
      projectId: "myeventmanager-b6085",
      storageBucket: "",
      messagingSenderId: "940504852815"
    });

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if(!user) {
        this.rootPage = 'login';
        unsubscribe();
      } else {
        this.rootPage = HomePage;
        unsubscribe();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }
}
