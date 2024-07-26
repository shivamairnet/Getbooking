import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
// import { CancelPackageComponent } from 'src/app/components/cancel-package/cancel-package.component';


interface CardDetails {
  title: string;
  data: { 
    [key: string]: any;
   }; 
}


interface Passenger {
  id: number;
  name: string;
  ticketDetails: CardDetails;
  passengerDetails: CardDetails;
  flightDetails: CardDetails[];
  hotelDetails:hotelDetails[];
  sightseeingDetails: CardDetails[];
  // mealDetails:CardDetails;
  // baggageDetails:CardDetails;
}

// interface Flight{
//   flightNumber: string;
//   airline: string;
//   departureTime: string;
//   arrivalTime: string;
//   departureDate: string;
//   arrivalDate: string;
//   departureCity: string;
//   arrivalCity: string;
//   class:string;
//   duration: string;
//   eTicketUrl?: string; 
//   baggage:string;
//   seat:string;
//   meal:string;
//   specialService:string;
//   flightRoute:string;
//   flightStatus:string;
//   pnr:string;
//   ticketId:string;
//   ticketNumber:string;
//   issueDate:string;
//   validatingAirline:string;
// }

// interface Traveller {
//   name: string;
//   dob:string;
//   gender:string;
//   contact:string;
//   email:string;
//   PAN:string;
//   flights: Flight[];
//   sightseeing:sightseeingDetails[];
//   hotels:hotelDetails[];
// }

// interface sightseeingDetails{
//   title: string;
//   data: { 
//     [key: string]: any;
// }
// }

interface hotelDetails{
  title: string;
  data: { 
    [key: string]: any;
}
roomdetails:RoomDetails[];
}

interface RoomDetails {
  title: string;
  data: {
    [key: string]: any;
  
  };
}


type CardType = 'ticketDetails' | 'passengerDetails' | 'flightDetails' |'roomDetails'|'hotelDetails'| 'sightseeingDetails';



@Component({
  selector: 'app-packagegenerate',
  templateUrl: './packagegenerate.component.html',
  styleUrls: ['./packagegenerate.component.scss']
})
export class PackagegenerateComponent implements OnInit {

  packageDetails: { label: string, value: string, tooltip?: string }[] = [
    { label: 'BookingId', value: '12345' },
    { label: 'Number Of Travellers', value: '4', tooltip: 'Adults: 2, Children: 2, Infants: 0' },
    
  ];

  serviceDetails: { label: string, value: string }[] = [
    { label: 'Number Of Flights', value: '2' },
    { label: 'Number Of Hotels', value: '1' },
    { label: 'Number Of Sightseeing', value: '3' },
    { label: 'Number Of Services',value:'0'},
    
  ];

  representativeDetails: { label: string, value: string }[] = [
    { label: 'Created On', value: '2024-07-06' },
    { label: 'Created By', value: 'John Doe' },
    { label: 'Last Date', value: '2024-07-08' },
    
  ];

  costDetails: { label: string, value: string }[] = [
    { label: 'Flight Cost', value: '200' },
    { label: 'Hotel Cost', value: '100' },
    { label: 'Sightseeing Cost', value: '100' },
    { label: 'Taxes', value: '100' },
    { label: 'Merchant Cost', value: '100' },
    { label: 'Merchant GST', value: '100' },
    { label: 'Transaction Fee', value: '200' }
  
  ];

  // traveller details for flights and tickets
  // travellers: Traveller[] = [
  //   {
  //     name: 'John Doe',
  //     dob:'29-Jan-2024',
  //     gender:'Male',
  //     contact:'998888888',
  //     email:'abcd@get.com',
  //     PAN:'HGET2626',

  //     flights: [
  //       { flightNumber: 'AB123', airline: 'Airline A', departureTime: '10:00 AM', arrivalTime: '12:00 PM', duration: '2h', eTicketUrl: 'path/to/eticket1.pdf', baggage: '30kg',seat:'N/A',
  //         meal: 'N/A',specialService: 'N/A',departureDate: '15-Jan-2024', arrivalDate: '21-Jan-2024', departureCity: 'Delhi',arrivalCity:'Dubai',class:'Economy' ,flightRoute : 'New York (JFK) - London (LHR)',pnr:'LQV4JV',flightStatus:'Confirmed',ticketId:'456558F',
  //         ticketNumber:'45666966',validatingAirline:'Indigo',issueDate:'15-Jan-2024' },
  //       { flightNumber: 'BC234', airline: 'Airline B', departureTime: '2:00 PM', arrivalTime: '4:00 PM', duration: '2h', eTicketUrl: 'path/to/eticket2.pdf',baggage: '30kg',seat:'N/A',
  //         meal: 'N/A',specialService: 'N/A',departureDate: '15-Jan-2024', arrivalDate: '21-Jan-2024', departureCity: 'Delhi',arrivalCity:'Dubai',class:'Economy',flightRoute : 'Los Angeles (LAX) - Tokyo (NRT)',pnr:'MNV4JV',flightStatus:'Confirmed',
  //         ticketId:'456558F',
  //         ticketNumber:'45666966',validatingAirline:'Indigo',issueDate:'15-Jan-2024' },
  //       { flightNumber: 'CD345', airline: 'Airline C', departureTime: '6:00 PM', arrivalTime: '8:00 PM', duration: '2h', eTicketUrl: 'path/to/eticket3.pdf',baggage: '30kg',seat:'N/A',
  //         meal: 'N/A',specialService: 'N/A',departureDate: '15-Jan-2024', arrivalDate: '21-Jan-2024', departureCity: 'Delhi',arrivalCity:'Dubai',class:'Economy',flightRoute : 'Chicago (ORD) - Paris (CDG)',pnr:'JPH4JV',flightStatus:'Confirmed',
  //         ticketId:'456558F',
  //         ticketNumber:'45666966',validatingAirline:'Indigo',issueDate:'15-Jan-2024' }
  //     ],
  //     sightseeing: [
  //       { title: 'Hollywood Sign', data: { city: 'Los Angeles', Date: '2024-07-29', time: '3:00 PM', Duration: '1 day', Visitors: '' } },
  //       { title: 'Times Square', data: { city: 'New York City', Date: '2024-07-30', time: '3:00 PM', Duration: '2 hours', Visitors: '' } }
  //     ],

  //     hotels: [
  //       { title: 'Hotel Bernia', data: { Address: 'Delhi', CheckIn: '2024-08-29', CheckOut: '2024-08-30', Nights: '1' },
  //       roomdetails:[
  //         {  title: 'Room Details', data: { Room:'1', RoomType: 'Superior Double Room,', RatePlan: '',Amenities:'' },},
  //         { title: 'Room 2 Details', data: { Room:'1', RoomType: 'Superior Double Room,', RatePlan: '',Amenities:'' }, }
  //       ],
  //     },
  //       { title: 'Atlanata Pacific', data: { Address: 'Bangalore', CheckIn: '2024-08-01', CheckOut: '2024-08-05', Nights: '' },
  //       roomdetails:[
  //         {  title: 'Room Details', data: { Room:'1', RoomType: 'Deluxe Double Room,', RatePlan: '',Amenities:'' },},
  //         { title: 'Room 2 Details', data: { Room:'1', RoomType: 'Family Suite,', RatePlan: '',Amenities:'' }, }
      
  //       ],
  //      },

  //     ],
      

  //   },
  //   {
  //     name: 'Jane Smith',
  //     dob:'29-Jan-2024',
  //     gender:'Male',
  //     contact:'998888888',
  //     email:'abcd@get.com',
  //     PAN:'HGET2626',
  //     flights: [
  //       { flightNumber: 'EF456', airline: 'Airline D', departureTime: '9:00 AM', arrivalTime: '11:00 AM', duration: '2h', eTicketUrl: 'path/to/eticket4.pdf',baggage: '30kg',seat:'N/A',
  //         meal: 'N/A',specialService: 'N/A',departureDate: '15-Jan-2024', arrivalDate: '21-Jan-2024', departureCity: 'Delhi',arrivalCity:'Dubai',class:'Economy',flightRoute : 'San Francisco (SFO) - Sydney (SYD)',pnr:'JPH4JV',flightStatus:'Confirmed',
  //         ticketId:'456558F',
  //         ticketNumber:'45666966',validatingAirline:'Indigo',issueDate:'15-Jan-2024' },
       
  //     ],
  //     sightseeing: [
  //       { title: 'Hollywood Sign', data: { city: 'Los Angeles', Date: '2024-07-29', time: '3:00 PM', Duration: '1 day', Visitors: '' } },
  //       { title: 'Times Square', data: { city: 'New York City', Date: '2024-07-30', time: '3:00 PM', Duration: '2 hours', Visitors: '' } }
  //     ],

  //     hotels: [
  //       { title: 'Hotel Oak Plaza', data: { Address: 'Delhi', CheckIn: '2024-07-29', CheckOut: '2024-07-30', Nights: '1' },
      
  //       roomdetails:[
  //         {  title: 'Room Details', data: { Room:'1', RoomType: 'Superior Double Room,', RatePlan: '',Amenities:'' },},
          
      
  //       ],
  //     },

  //       { title: 'Grand Inn', data: { Address: 'Bangalore', CheckIn: '2024-08-01', CheckOut: '2024-08-05', Nights: '' },
  //       roomdetails:[
  //         {  title: 'Room 1 Details', data: { Room:'1', RoomType: 'Superior Single Room,', RatePlan: '',Amenities:'' },},
  //         { title: 'Room 2 Details', data: { Room:'1', RoomType: 'Deluxe Room,', RatePlan: '',Amenities:'' }, }
      
  //       ], 
  //     },

      
  //     ],
  //   }
    
  // ];

  // selectedTab: number = 0;
  // router: any;

  selectTab(index: number) {
    this.selectedTab = index;
  }

  // navigate to cancellation page
  navigateToConfirmCancellation(): void {
    this.router.navigate(['/app-confirmcancel']);
  }

  constructor(private router: Router) { }
  ngOnInit(): void {
  // Initialize with one passenger for testing
  this.passengers = [
    {
      id: 1,
      name: 'Traveller 1',
      ticketDetails: { title: 'Ticket Details', data: { TicketId: '123456', 
        TicketNumber:'12456',IssueDate:'',
        ValidatingAirline:'',Status:'' } },
      passengerDetails: { title: 'Traveller Details', data: {Title:'Mr.',Firstname:'John',Secondname:'Doe',isLeadPassenger: true, Birthdate: '30-Jan-2000', age:'24',gender:'Male',nationality:'Indian',PassportNumber:'2366457',PAN:'EGR8985T',contact:'9895698562',email:'abc@gmail.com',address:'Pakhowla Road',city:'Ludhiana',country:'India'
        } },

      flightDetails: [
        
          { title: 'Flight 1 Details', data: { Airline: 'Finnair (AY)', flightNumber: 'XY123', departure: '2024-07-29', departuretime: '12:00 AM', arrival: '2024-07-29', arrivaltime: '12:00 AM', duration: '2hr', class: 'Economy', airline: 'Airline A', departureTime: '10:00 AM', arrivalTime: '12:00 PM', eTicketUrl: 'path/to/eticket1.pdf', baggage: '30kg',seat:'N/A',
            meal: 'N/A',specialService: 'N/A',
                    departureDate: '15-Jan-2024', arrivalDate: '21-Jan-2024', departureCity: 'Delhi',arrivalCity:'Dubai' ,flightRoute : 'New York (JFK) - London (LHR)',pnr:'LQV4JV',flightStatus:'Confirmed',ticketId:'456558F',  
                    TicketNumber:'12456',IssueDate:'',
                    ValidatingAirline:''         
            } },
          { title: 'Flight 2 Details', data: { Airline: 'Finnair (AY)', flightNumber: 'XY124', departure: '2024-07-30', departuretime: '2:00 PM', arrival: '2024-07-30', arrivaltime: '4:00 PM', duration: '2hr', class: 'Business', airline: 'Airline A', departureTime: '10:00 AM', arrivalTime: '12:00 PM', eTicketUrl: 'path/to/eticket1.pdf', baggage: '30kg',seat:'N/A',
             meal: 'N/A',specialService: 'N/A',
             TicketNumber:'12456',IssueDate:'',
             ValidatingAirline:'',
            departureDate: '15-Jan-2024', arrivalDate: '21-Jan-2024', departureCity: 'Delhi',arrivalCity:'Dubai' ,flightRoute : 'Delhi (DEL) - London (LHR)',pnr:'LQV4JV',flightStatus:'Confirmed',ticketId:'456558F',
            
            } }
        ],

      // mealDetails: {title:'Meal Details',data:{Airline: 'Finnair (AY)', departure: '2024-07-29', arrival: '2024-07-29'}},
      // baggageDetails: {title:'Baggage Details',data:{Airline: 'Finnair (AY)', departure: '2024-07-29', arrival: '2024-07-29'}},  
      hotelDetails: [
        { title: 'Hotel Bernia', data: { Address: 'Dehradun', CheckIn: '2024-07-29', CheckOut: '2024-07-30', Nights: '1' },
        roomdetails:[
          {  title: 'Room Details', data: { Room:'1', RoomType: 'Superior Double Room,', RatePlan: '',Amenities:'' },},
          { title: 'Room 2 Details', data: { Room:'1', RoomType: 'Superior Double Room,', RatePlan: '',Amenities:'' }, }
        ],
      },
        { title: 'Atlanata Pacific', data: { Address: 'Dalhousie', CheckIn: '2024-08-01', CheckOut: '2024-08-05', Nights: '' },
        roomdetails:[
          {  title: 'Room Details', data: { Room:'1', RoomType: 'Superior Double Room,', RatePlan: '',Amenities:'' },},
          { title: 'Room 2 Details', data: { Room:'1', RoomType: 'Superior Double Room,', RatePlan: '',Amenities:'' }, }
        ],
       },
      ],

    sightseeingDetails: [
        { title: 'Hollywood Sign', data: { city: 'Los Angeles', Date: '2024-07-29', time: '3:00 PM', Duration: '1 day', Visitors: '' } },
        { title: 'Times Square', data: { city: 'New York City', Date: '2024-07-30', time: '3:00 PM', Duration: '2 hours', Visitors: '' } }
      ]
    },

    {
      id: 2,
      name: 'Traveller 2',
      ticketDetails: { title: 'Ticket Details', data: { TicketId: '123456', 
        TicketNumber:'12456',IssueDate:'',
        ValidatingAirline:'',Status:'' } },
      passengerDetails: { title: 'Traveller Details', data: {Name:'martin',isLeadPassenger: true, Birthdate: '30-Jan-2000', age:'24',gender:'Male',nationality:'Indian',PassportNumber:'2366457',PAN:'EGR8985T',contact:'9895698562',email:'abc@gmail.com',address:'Pakhowla Road',city:'Ludhiana',country:'India'
        } },

      flightDetails: [
          { title: 'Flight 1 Details', data: { Airline: 'Finnair (AY)', flightNumber: 'XY123', departure: '2024-07-29', departuretime: '12:00 AM', arrival: '2024-07-29', arrivaltime: '12:00 AM', duration: '', class: 'Economy' } },
          { title: 'Flight 2 Details', data: { Airline: 'Finnair (AY)', flightNumber: 'XY124', departure: '2024-07-30', departuretime: '2:00 PM', arrival: '2024-07-30', arrivaltime: '4:00 PM', duration: '', class: 'Business' } }
        ],

      // mealDetails: {title:'Meal Details',data:{Airline: 'Finnair (AY)', departure: '2024-07-29', arrival: '2024-07-29'}},
      // baggageDetails: {title:'Baggage Details',data:{Airline: 'Finnair (AY)', departure: '2024-07-29', arrival: '2024-07-29'}},
      hotelDetails: [
        { title: 'Hotel Toronto', data: { Address: 'Dehradun', CheckIn: '2024-07-29', CheckOut: '2024-07-30', Nights: '1' },
        
        roomdetails:[
          {  title: 'Room Details', data: { Room:'1', RoomType: 'Superior Double Room,', RatePlan: '',Amenities:'' },},
          { title: 'Room 2 Details', data: { Room:'1', RoomType: 'Superior Double Room,', RatePlan: '',Amenities:'' }, }
      
        ],
      },
        { title: 'Plaza Pacific', data: { Address: 'Dalhousie', CheckIn: '2024-08-01', CheckOut: '2024-08-05', Nights: '' },
        roomdetails:[
          {  title: 'Room Details', data: { Room:'1', RoomType: 'Superior Double Room,', RatePlan: '',Amenities:'' },},
          { title: 'Room 2 Details', data: { Room:'1', RoomType: 'Superior Double Room,', RatePlan: '',Amenities:'' }, }
      
        ],
      
       },
      ],

      sightseeingDetails: [
        { title: 'Hollywood Sign', data: { city: 'Los Angeles', Date: '2024-07-29', time: '3:00 PM', Duration: '1 day', Visitors: '' } },
        { title: 'Times Square', data: { city: 'New York City', Date: '2024-07-30', time: '3:00 PM', Duration: '2 hours', Visitors: '' } }
      ]
    }
   
  ];
}

passengers: Passenger[] = [];
 selectedTab: number = 0;
addPassenger() {
  console.log("hello1");
  const newPassenger: Passenger = {
    id: this.passengers.length + 1,
    name: `Traveller ${this.passengers.length + 1}`,
    ticketDetails: { title: 'Ticket Details', data: {} },
    passengerDetails: { title: 'Traveller Details', data: {} },
    flightDetails:[],
    hotelDetails:[],
    sightseeingDetails:[],
    // mealDetails:{title:'Meal Details',data:{}},
    // baggageDetails:{title:'Baggage Details',data:{}},
  };
  this.passengers.push(newPassenger);
}

getKeyValuePairs(data: any): { key: string, value: any }[] {
  return Object.keys(data).map(key => ({ key, value: data[key] }));
}

updateCardData(passengerIndex: number, cardType: string, key: string, value: any) {
  this.passengers[passengerIndex][cardType].data[key] = value;
  console.log("hello3");
}

// for dynamic column slicing
// chunkArray(array: any[], chunkSize: number): any[] {
//   const filteredArray = array.filter(item => item.key !== 'isLeadPassenger');
//   const chunks = [];
//   for (let i = 0; i < filteredArray.length; i += chunkSize) {
//     chunks.push(filteredArray.slice(i, i + chunkSize));
//   }
//   return chunks;
// }


//accordion of the details section
activeIndex: number | null = null;
toggleAccordion(index: number) {
  this.activeIndex = this.activeIndex === index ? null : index;
}

// tabs for services nd terms and conditions
  activeTab: string = 'flights';
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  activeTab1: string = 'flights';
  setActiveTab1(tab: string) {
    this.activeTab1 = tab;
  }

  //terms and conditions array
  flightData = [
    { id: 1, title: 'Delhi to Chennai',cancellationPolicy: {
    
      points: [
        'Point 1',
        'Point 2',
        'Point 3',
      ],},
      fareRules: {points:[
        'Point 1',
        'Point 2',
        'Point 3',
      ]}, open: false },

    { id: 2, title: 'Flight 2',cancellationPolicy: {
      content: 'Cancellation Policy',
      points: [
        'Point 1',
        'Point 2',
        'Point 3',
      ],},
      fareRules: {content:'Fare Rules',points:[
        'Point 1',
        'Point 2',
        'Point 3',
      ]}, open: false },
    { id: 3, title: 'Flight 3',cancellationPolicy: {
      content: 'Cancellation Policy',
      points: [
        'Point 1',
        'Point 2',
        'Point 3',
      ],},
      fareRules: {content:'Fare Rules',points:[
        'Point 1',
        'Point 2',
        'Point 3',
      ]}, open: false }
  ];
  hotelData = [
    { id: 1, title: 'Hotel 1',cancellationPolicy:{
      content: 'Cancellation Policy',
      points: [
        'Point 1',
        'Point 2',
        'Point 3',
      ],},
      fareRules: {content:'Fare Rules',points:[
        'Point 1',
        'Point 2',
        'Point 3',
      ]}, open: false },
    { id: 2, title: 'Hotel 2', cancellationPolicy:{content: 'Cancellation Policy',
      points: [
        'Point 1',
        'Point 2',
        'Point 3',
      ],},
      fareRules: {content:'Fare Rules',points:[
        'Point 1',
        'Point 2',
        'Point 3',
      ]}, open: false }
  ];
  sightseeingData = [
    { id: 1, title: 'Sightseeing 1',cancellationPolicy: {content: 'Cancellation Policy',
      points: [
        '100.00% of total amount will be charged, If cancelled between 26-Jul-2024 00:00:00 and 29-Jul-2024 00:00:00.',
        'Point 2',
        'Point 3',
      ],},
      fareRules: {content:'Fare Rules',points:[
        'Point 1',
        'Point 2',
        'Point 3',
      ]}, open: false },

    { id: 2, title: 'Sightseeing 2', cancellationPolicy:{content: 'Cancellation Policy',
      points: [
        'Point 1',
        'Point 2',
        'Point 3',
      ],},
      fareRules: {content:'Fare Rules',points:[
        'Point 1',
        'Point 2',
        'Point 3',
      ]}, open: false }
  ];

  // HOTEL VOUCHER
  showVoucher: boolean = true; // change to false
  selectedHotel: any ;
  viewVoucher(hotel:any) {
    this.selectedHotel = hotel;  
    this.router.navigate(['app-vouchers'], {
      queryParams: {
        showVoucher: this.showVoucher.toString(),
        selectedHotel: JSON.stringify(this.selectedHotel)
      }
    });
  }

  // SIGHT VOUCHER
  showsightVoucher: boolean = true; 
  selectedSight:any;
    viewsightVoucher() {
      this.router.navigate(['app-voucher-sightseeing'], {
        queryParams: {
          showsightVoucher: this.showsightVoucher.toString(),
          selectedSight: JSON.stringify(this.selectedSight)
        }
      });
    }

    // TICKET VOUCHER
    showticketVoucher: boolean = true; 
    selectedFlight:any;
    viewticketVoucher() {
      // this.selectedHotel = hotel;
      this.router.navigate(['app-voucher-ticket'], {
        queryParams: {
          showticketVoucher: this.showticketVoucher.toString(),
          selectedFlight: JSON.stringify(this.selectedFlight)
        }
      });
    }


// toggle traveller details--show and hide
showTravellerDetails: boolean = false;

  toggleTravellerDetails() {
    this.showTravellerDetails = !this.showTravellerDetails;
  }

//cancellation modal
// showModal = false;

  // openCancellationModal(): void {
  //   this.showModal = true;
  // }

  // onModalConfirmed(result: boolean): void {
  //   this.showModal = false;
  //   if (result) {
      
  //     console.log('Cancellation confirmed');
  //   }
  // }

  // Cancellation modal
  loading = false;
  showModal = false;

  closeModal(): void {
    this.showModal = false;
  }

  openModal(): void {
    this.showModal = true;
  }

  calculateCancellationRefund() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.showModal = false; 
      // Close modal after loading
      this.router.navigate(['app-confirmcancel']);
    }, 2000);
  }

// open modal for fare rules

  fareRules = {
    domestic: {
      // fareBasisCode: 'SSAV',
      // sectors: '# and #',
      changeFee: 'INR 2500',
      cancellationFee: 'INR 3000',
      baggageAllowance: '15 kg'
    },
    // international: {
      // fareBasisCode: 'SSAV',
      // sectors: 'ABC and PQR',
      // changeFee: 'INR 3500',
      // cancellationFee: 'INR 4500',
      // baggageAllowance: [
        // 'Ex India to Male: 20 kg',
        // 'Ex India to Muscat: 30 kg',
        // 'Ex India to Bangkok: 20 kg',
        // 'Ex India to Colombo: 30 kg',
        // 'Ex India to Dubai: 30 kg',
        // 'Ex India to Kabul: 30 kg',
        // 'Ex India to Dhaka: 20 kg',
        // 'Ex Male: 20 kg',
        // 'Ex Colombo: 30 kg',
        // 'Ex Dubai: 30 kg',
        // 'Ex Kabul: 30 kg',
        // 'Ex Muscat: 30 kg',
        // 'Ex Bangkok: 20 kg',
        // 'Ex Dhaka: 20 kg'
      // ]
    // },
    otherCharges: 'Apart from airline charges, GST, RAF, and any applicable charges will be added.',
    requestTimes: {
      domestic: 'At least 2 hours before the airline\'s cancellation and reissue policy.',
      international: 'At least 4 hours before the airline\'s cancellation and reissue policy.'
    }
  };

  isModalVisible = false;

  openfareModal(event: Event): void {
    event.preventDefault(); // Prevent the default link behavior
    this.isModalVisible = true;
  }

  closefareModal(): void {
    this.isModalVisible = false;
  }
}


  