import { AfterViewInit, Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-voucher-ticket',
  templateUrl: './voucher-ticket.component.html',
  styleUrls: ['./voucher-ticket.component.scss']
})
export class VoucherTicketComponent implements OnInit,AfterViewInit {

//barcode array
barcodeData: string = 'M1SINGH/RAMBO';

  //variables for important and note
  importantItems: string[] = [];
  noteItems: string[] = []; 

  //variables for payment
  paymentDetails: { label: string, amount: number }[] = [];
  totalAmount: number = 0;

  //variables for address
  agencyAddress: { address: string, city: string, phone: string, email: string };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
     //div for important and note fields
     this.importantItems = [
      'Item 1 for important section',
      'Item 2 for important section',
      'Item 3 for important section'
    ];

    this.noteItems = [
      'Item 1 for note section',
      'Item 2 for note section',
      'Item 3 for note section'
    ];

    //payment div
    this.paymentDetails = [
      { label: 'Fare', amount: 500 },
      { label: 'GST', amount: 50 },
      { label: 'Fee/Surcharge', amount: 20 }
    ];
    this.calculateTotalAmount();

    //address
    this.agencyAddress = {
      address: 'Airnet Travel And Cargo Pvt. Ltd.,Pakhowal Road',
      city: 'Ludhiana',
      phone: '9899966223',
      email: 'abc@gmail.com'
    };
  }
  

  //BARCODE GENERATION
  ngAfterViewInit(): void {
    const barcodeElement = document.querySelector('svg');
    if (barcodeElement) {
      JsBarcode(barcodeElement, this.barcodeData, {
        format: "CODE128", // Adjust format based on your needs
        displayValue: true, // Set to false if you don't want to show the value
        width: 1,  // Width of the bars
        height: 40, // Height of the barcode
        margin:0,
      });
    }
  }
  
    calculateTotalAmount(): void {
      this.totalAmount = this.paymentDetails.reduce((total, detail) => total + detail.amount, 0);
    }
  }

