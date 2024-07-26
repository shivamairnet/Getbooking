import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.scss']
})
export class VouchersComponent implements OnInit {

   showVoucher: boolean;
   selectedHotel: any;

   //variables for address
  agencyAddress: { address: string, city: string, phone: string, email: string };
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.showVoucher = params['showVoucher'] === 'true';
      this.selectedHotel = params['selectedHotel'] ? JSON.parse(params['selectedHotel']) : null;
    });

     //address
     this.agencyAddress = {
      address: 'Airnet Travel And Cargo Pvt. Ltd.,Pakhowal Road',
      city: 'Ludhiana',
      phone: '9899966223',
      email: 'abc@gmail.com'
    };
  
  }

}
