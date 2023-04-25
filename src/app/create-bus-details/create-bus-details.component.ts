import { Component, OnInit } from '@angular/core';
import { BusDetails } from '../BusDetails';
import { BusDetailsService } from '../bus-details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-bus-details',
  templateUrl: './create-bus-details.component.html',
  styleUrls: ['./create-bus-details.component.css']
})
export class CreateBusDetailsComponent implements OnInit{
  busDetails: BusDetails = new BusDetails();
  constructor(private busDetailsService: BusDetailsService ,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveBusDetails(){
    this.busDetailsService.createBusDetails(this.busDetails).subscribe( data =>{
      console.log(data);
      this.router.navigate(['/busDetails']);
      this.goToBusDetailsList();
    },
    error => console.log(error));
  }

  goToBusDetailsList(){
    this.router.navigate(['/busDetails']);
  }

  onSubmit(){
    console.log(this.busDetails);
    this.saveBusDetails();
  }
}