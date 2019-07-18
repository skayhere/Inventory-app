import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http,Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import { UserdetailPage } from '../userdetail/userdetail';
// import { UserdetailPageModule } from '../userdetail/userdetail.module';
import { UserdetailsProvider } from '../../providers/userdetails/userdetails';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email:any;
  password: any;
  constructor(public navCtrl: NavController, private http: Http, private ud: UserdetailsProvider) {

  }
  Login(event){
    console.log(this.email+":"+this.password);
    // this.http.post(" ")
    let headers=new Headers({ 'Content-Type': 'application/json'}); 
       let options = new RequestOptions({ headers: headers }); 
       
      this.http.post('http://ec2-13-233-254-150.ap-south-1.compute.amazonaws.com/security/api/login',{ 
          "email": this.email, 
          "password":this.password
      },options) 
        .map(res => res.json()).subscribe(data => { 
             console.log(data);
             this.ud.userid = data.id;
             this.ud.vname = data.fullname;
            alert("Welcome" + ", " + data.fullname);
            this.navCtrl.push(UserdetailPage);
        } 
        ,(err) => {
          console.log(err); 
                alert("Authenticate Failure,retry."); 
        });
        
  }

}
