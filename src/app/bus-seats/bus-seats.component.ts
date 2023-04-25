import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusDetails } from '../BusDetails';
import { BusDetailsService } from '../bus-details.service';

@Component({
  selector: 'app-bus-seats',
  templateUrl: './bus-seats.component.html',
  styleUrls: ['./bus-seats.component.css']
})
export class BusSeatsComponent implements OnInit {
    busId: number = 0;
    totalprice: number=0;
    bookedSeats: number=0;
    busDetails: BusDetails = new BusDetails();
    constructor(private busDetailsService: BusDetailsService,
      private route: ActivatedRoute,
      private router: Router) { }
  
    ngOnInit(): void {
      this.busId = this.route.snapshot.params['busId'];//busId parameter
      this.busDetailsService.getBusDetailsById(this.busId).subscribe((data:any) => {
        this.busDetails = data;
      }, (error: any) => console.log(error));
    }
    onSubmit() {
      var status=confirm("ThankYou for booking!");
      if(status==true){
      
      this.busDetailsService.updateBusSeatsDetails(this.busId, this.busDetails)
        .subscribe(data => {
          this.router.navigate(['/busDetails']);
        }
        , error => console.log(error));
      }
      else{
        this.router.navigate(['bus-seats']);
      }
    }
      myFunction(){
        this.busDetails.noOfSeats -= this.busDetails.bookedSeats;
        this.busDetails.totalprice = this.busDetails.bookedSeats * (this.busDetails.costPerSeats);
      }
 
 
}