import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-voucher-sightseeing',
  templateUrl: './voucher-sightseeing.component.html',
  styleUrls: ['./voucher-sightseeing.component.scss']
})
export class VoucherSightseeingComponent implements OnInit {
  agencyAddress: { address: string, city: string, phone: string, email: string };
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {    
    //address
    this.agencyAddress = {
      address: 'Airnet Travel And Cargo Pvt. Ltd.,Pakhowal Road',
      city: 'Ludhiana',
      phone: '9899966223',
      email: 'abc@gmail.com'
    };
  }

  toMakeChanges=[
    {text:'To change'}
  ]

  Enquires=[
    {text:'For enquires'}
  ]

  inclusions = [
    { text: 'Approx 30 minutes private Gondala ride' }
  ];

  exclusions = [
    { text: 'Gratuities' },
    { text: 'Hotel Pickup and Drop-off' }
  ];

  meetingAndPickup = {
    meetingPoint: '',
    startTime: '',
    endPoint: ''
  };

  beforeYouGo = "Ensure to carry your ID and booking confirmation.";
  

}
