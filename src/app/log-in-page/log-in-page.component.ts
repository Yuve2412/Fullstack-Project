import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})

  export class LogInPageComponent implements OnInit{
    username = '';
    password = '';
    invalidLogin = false
    emessage ="";
    constructor(private router: Router,
      private loginService: AuthenticationService){}
    
      ngOnInit() {
         }
         checkLogin(){
          if(this.loginService.authenticate(this.username,this.password)){
            this.router.navigate(['busDetails']);
            console.log("navigate...");
            this.invalidLogin = false;
          }
          else 
          this.invalidLogin = true;
          this.emessage='Enter a valid credentials';
         }
         }
    

