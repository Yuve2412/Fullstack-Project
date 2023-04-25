import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  constructor(public loginService:AuthenticationService,private router:Router) { }
  
    ngOnInit(): void {
     
    }
  toclick(){
    this.router.navigate(['busDetails']);
}
}
