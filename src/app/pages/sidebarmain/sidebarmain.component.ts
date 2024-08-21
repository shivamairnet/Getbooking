import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarmain',
  templateUrl: './sidebarmain.component.html',
  styleUrls: ['./sidebarmain.component.scss']
})
export class SidebarmainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openSections: any = {
    bookings: false,
    itineraries: false,
    reports: false,
    supplierConfirmations: false
  };

  toggleSection(section: string) {
    this.openSections[section] = !this.openSections[section];
  }

}
