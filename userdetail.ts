import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HttpModule } from '@angular/http';
import { UserdetailsProvider } from '../../providers/userdetails/userdetails';
import { Http } from '@angular/http';

/**
 * Generated class for the UserdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userdetail',
  templateUrl: 'userdetail.html',
})
export class UserdetailPage {
 user: any;
 store: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private ud: UserdetailsProvider, public httpc: Http) {
    console.log(this.ud.userid);
             console.log(this.ud.vname);
             
  }

  ionViewDidLoad() {
    this.user = this.ud.vname;
    console.log('ionViewDidLoad UserdetailPage');
    this.getdetails();
    //Get vendor details using user id
    //http://ec2-13-233-254-150.ap-south-1.compute.amazonaws.com/catalog/api/vendor/user/5c91cb5a61256926f4aee2e0
  }
   getdetails(){
  //   const data = JSON.parse(localStorage.getItem('fullname'));
  //   this.user = data.userData;
  //   console.log(this.user);
  this.httpc.get('http://ec2-13-233-254-150.ap-south-1.compute.amazonaws.com/catalog/api/vendor/user/'+this.ud.userid)
  .map(res => res.json()).subscribe(data => {
    console.log(data[0].store_name);
    this.store = data[0].store_name;
  })
   }
}
