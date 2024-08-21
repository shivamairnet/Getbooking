import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-agent',
  templateUrl: './dashboard-agent.component.html',
  styleUrls: ['./dashboard-agent.component.scss']
})
export class DashboardAgentComponent implements OnInit {

  totalSales: number = 234.85;
  bookings: number = 80;
 
  constructor() { }

  ngOnInit(): void {
  }

 

}
