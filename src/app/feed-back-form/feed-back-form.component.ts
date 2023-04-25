import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusDetailsService } from '../bus-details.service';

@Component({
  selector: 'app-feed-back-form',
  templateUrl: './feed-back-form.component.html',
  styleUrls: ['./feed-back-form.component.css']
})
export class FeedBackFormComponent implements OnInit{
  constructor(private route: ActivatedRoute, private busManagementService: BusDetailsService,private router: Router) { }
  ngOnInit(){
  }
  backToHome(){
    alert("Thank you for you feed back");
    this.router.navigate(['app-home-page']);
    }
}
