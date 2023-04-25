import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusDetailsService } from '../bus-details.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit{
 firstName = "";
 lastName = "";
  password = "";
  gender="";
  email="";
  phoneNumber="";

  constructor(private router: Router,
    private loginService: AuthenticationService){}
ngOnInit(){
}
checkRegister(){
   /* if(this.firstName === '' || this.email === '' || this.password === ''){
      var status = confirm("Please fill it is required field");
    }
  
    else{*/
      var status=confirm("Registered successfully");
      if(status==true){
        this.router.navigate(['app-log-in-page']);
      
      
    }
  }

}
