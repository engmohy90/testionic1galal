import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-storage1',
  templateUrl: 'storage1.html'
})
export class Storage1Page {
  sss: any
  newkey: any
  newvalue: any

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage) {
    // If we navigated to this page, we will have an item available as a nav param

    // Let's populate this page with some filler content for funzies

  }


  savekey() {
    debugger
    this.storage.set(this.newkey, this.newvalue);
  }

  getkey() {
    debugger
    this.storage.get(this.newkey).then((val) => {
      this.sss = val
    })
  }
}
