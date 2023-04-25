import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { BusDetailsService } from '../bus-details.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  constructor(private route: ActivatedRoute, private busManagementService: BusDetailsService,private router: Router) { }

  ngOnInit(): void {
  }
  checkLogin(){
      this.router.navigate(['app-login-form']);
      }
}