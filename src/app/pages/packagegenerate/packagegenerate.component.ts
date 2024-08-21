import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { text } from 'stream/consumers';


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


  // package details array
  packageDetails: { label: string, value: string, tooltip?: string }[] = [
    { label: 'BookingId', value: '12345' },
    { label: 'Number Of Travellers', value: '4', tooltip: 'Adults: 2, Children: 2, Infants: 0' },
    
  ];

  //service details in package overview array
  serviceDetails: { label: string, value: string }[] = [
    { label: 'Number Of Flights', value: '2' },
    { label: 'Number Of Hotels', value: '1' },
    { label: 'Number Of Sightseeing', value: '3' },
    { label: 'Number Of Services',value:'0'},
    
  ];

//representative details in package overview array
  representativeDetails: { label: string, value: string }[] = [
    { label: 'Created On', value: this.formatDate('2024-07-06') },
    { label: 'Created By', value: 'John Doe' },
    { label: 'Last Date', value: this.formatDate('2024-07-15') },
    
  ];

  // cost details in package overview array
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

  //Traveller details tab
  selectTab(index: number) {
    this.selectedTab = index;
  }

  //Traveller tabs in flights specifically
  selectTab1(index: number) {
    this.selectedTab1 = index;
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
        ValidatingAirline:'',Status:'Confirmed' } },
      passengerDetails: { title: 'Traveller Details', data: {Title:'Mr.',Firstname:'John',Secondname:'Doe',isLeadPassenger: true, Birthdate: '30-Jan-2000', age:'24',gender:'Male',nationality:'Indian',PassportNumber:'2366457',PAN:'EGR8985T',contact:'9895698562',email:'abc@gmail.com',address:'Pakhowla Road',city:'Ludhiana',country:'India'
        } },

      flightDetails: [
        
          { title: 'Flight 1 Details', data: { Airline: 'Finnair (AY)', flightNumber: 'XY123', departure: '2024-07-29', departuretime: '12:00 AM', arrival: '2024-07-29', arrivaltime: '12:00 AM', duration: '2hr', class: 'Economy', airline: 'Airline A', departureTime: '10:00 AM', arrivalTime: '12:00 PM', eTicketUrl: 'path/to/eticket1.pdf', baggage: '30kg',seat:'N/A',
            meal: 'N/A',specialService: 'N/A',
                    departureDate: '15-Jan-2024', arrivalDate: '21-Jan-2024', departureCity: 'Delhi',arrivalCity:'Dubai' ,flightRoute : 'New York (JFK) - London (LHR)',pnr:'LQV4JV',flightStatus:'Confirmed',ticketId:'456558F',  
                    TicketNumber:'12456',IssueDate:'2024-07-10',
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


  //terms and conditions 
   // Apply the formatRemarks function
   this.sightseeingData.forEach(sight => {
    sight.cancellationPolicy.remarks.forEach(remark => {
      remark.text = this.formatRemarks(remark.text);
    });
  });

  //Apply the formathotelnorms function
  this.hotelData.forEach(hotel=>{
    hotel.cancellationPolicy.hotelnorms.forEach(hotelnorm =>
    {
      hotelnorm.text = this.formatHotelDetails(hotelnorm.text);
    }
    )
  })
}



passengers: Passenger[] = [];
 selectedTab: number = 0;
 selectedTab1: number = 0;
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

    { id: 1, title: 'DELHI to DUBAI',cancellationPolicy: {
      content: 'Fare Rules',
      points: [{
        text:`The FareBasisCode is: SSAV<br /> \n Domestic:\n You have booked a Saver Fare for # and # sector(s). Free baggage allowance applicable for domestic sector is 15 k.g\n \nInternational:\n You have booked a saver Fare from  ABC  and  PQR  sector(s). Change and Cancellation fee is applicable on this fare are INR 3500 and INR 4500 respectively. However, in case of changes difference in fare shall be charged if applicable.  Free baggage allowance applicable for International sectors is given below:\n \nSector Free Bag Allowance\nEx India to Male 20 Kgs\nEx India to Muscat 30 Kgs\nEx India to Bangkok 20 Kgs\nEx India to Colombo 30 Kgs\nEx India to Dubai 30 Kgs\nEx India to Kabul 30 Kgs\nEx India to Dhaka 20 Kgs\nEx Male 20 Kgs\nEx Colombo 30 Kgs\nEx Dubai 30 Kgs\nEx Kabul 30 Kgs\nEx Muscat 30 Kgs\nEx Bangkok 20 Kgs\nEx Dhaka 20 Kgs\n\n <br/> <br/><ul><li>APART FROM AIRLINE CHARGES,GST+RAF+ APPLICABLE CHARGES IF ANY, WILL BE CHARGED.</li><li>MENTIONED FEE ARE INDICATIVE PER PAX AND PER SECTOR.</li><li>FOR DOMESTIC BOOKINGS, PASSENGERS ARE REQUIRED TO SUBMIT THE CANCELLATION OR REISSUE REQUEST AT LEAST 2 HOURS BEFORE THE AIRLINES CANCELLATION AND REISSUE POLICY.</li><li>FOR INTERNATIONAL BOOKINGS, PASSENGERS ARE REQUIRED TO SUBMIT THE CANCELLATION OR REISSUE REQUEST AT LEAST 4 HOURS BEFORE THE AIRLINES CANCELLATION AND REISSUE POLICY.</li></ul>`
        
     } ],},
      open: false },
   
  ];

  hotelData = [
    { id: 1, title: 'Hotel 1',cancellationPolicy:{
      content: 'Hotel Norms',
      hotelnorms: [{
        text: `As per the decree issued by UAE Government, 5% VAT shall be levied for all the hotels booking whose check in are from 1st Jan 2018 onward. The hotels may charge the same directly from customers for past bookings whose check in fall on or after 1st Jan 2018. Even if the accommodation was booked and paid for before 1st January 2018. Please inform your customers accordingly.\r\n|<ul></ul>|CheckIn Time-Begin: 2:00 PM  CheckIn Time-End: midnightCheckOut Time: 12:00 PMCheckIn Instructions: &lt;ul&gt;  &lt;li&gt;Extra-person charges may apply and vary depending on property policy&lt;/li&gt;&lt;li&gt;Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges&lt;/li&gt;&lt;li&gt;Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed&lt;/li&gt;&lt;li&gt;The name on the credit card used at check-in to pay for incidentals must be the primary name on the guestroom reservation&lt;/li&gt;&lt;li&gt;This property accepts credit cards, debit cards, and cash&lt;/li&gt;&lt;li&gt;Safety features at this property include a fire extinguisher, a security system, and a first aid kit&lt;/li&gt;  &lt;/ul&gt;  Special Instructions : This property offers transfers from the airport (surcharges may apply). Guests must contact the property with arrival details before travel, using the contact information on the booking confirmation. This property doesn't offer after-hours check-in. Front desk staff will greet guests on arrival.Minimum CheckIn Age : 18Mandatory Fees: &lt;p&gt;You'll be asked to pay the following charges at the property:&lt;/p&gt; &lt;ul&gt;&lt;li&gt;A tax is imposed by the city: AED 10.00 per accommodation, per night&lt;/li&gt;&lt;/ul&gt; &lt;p&gt;We have included all charges provided to us by the property. &lt;/p&gt;  Optional Fees: &lt;ul&gt; &lt;li&gt;Fee for continental breakfast: approximately AED 40.00 for adults and AED 25 for children&lt;/li&gt;&lt;li&gt;Airport shuttle fee: AED 200 per person (one-way)&lt;/li&gt;&lt;li&gt;Airport shuttle fee per child: AED 100 (one-way), (from 4 to 11 years old)&lt;/li&gt; &lt;li&gt;Rollaway bed fee: AED 120.0 per day&lt;/li&gt;&lt;/ul&gt; &lt;p&gt;The above list may not be comprehensive. Fees and deposits may not include tax and are subject to change. &lt;/p&gt;Cards Accepted: Visa,Debit cards,Cash,American Express,Mastercard&lt;ul&gt;  &lt;li&gt;Only registered guests are allowed in the guestrooms. &lt;/li&gt; &lt;li&gt;No pets and no service animals are allowed at this property. &lt;/li&gt; &lt;/ul&gt;,Service animals not allowed,Pets not allowed,Property confirms they are implementing guest safety measures,Temperature checks are available to guests,Social distancing measures are in place,Staff temperature checks are conducted regularly,Property confirms they are implementing enhanced cleaning measures,Guests are provided with free hand sanitizer,Property is cleaned with disinfectant,Staff wears personal protective equipment,Commonly-touched surfaces are cleaned with disinfectantW.e.f 31.03.2014, Government of Dubai is applying “Tourism Dirham” a fee ranging from AED 7-20 per room per night, which the guests availing the stay will have to pay to the hotel directly as applied before check-out.Please refer to the following Terms of Use - http://mytravelagent.online/termsofuse.pdfEarly check out will attract full cancellation charge unless otherwise specified.|<ul></ul><strong>City tax and Resort fee are to be paid directly at hotel if applicable.</strong>",
        `
 }
      ],},
      
      open: false },

    { id: 2, title: 'Hotel 2', cancellationPolicy:{content: 'Hotel Norms',
      hotelnorms: [{
        text: `As per the decree issued by UAE Government, 5% VAT shall be levied for all the hotels booking whose check in are from 1st Jan 2018 onward. The hotels may charge the same directly from customers for past bookings whose check in fall on or after 1st Jan 2018. Even if the accommodation was booked and paid for before 1st January 2018. Please inform your customers accordingly.\r\n|<ul></ul>|CheckIn Time-Begin: 2:00 PM  CheckIn Time-End: midnightCheckOut Time: 12:00 PMCheckIn Instructions: &lt;ul&gt;  &lt;li&gt;Extra-person charges may apply and vary depending on property policy&lt;/li&gt;&lt;li&gt;Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges&lt;/li&gt;&lt;li&gt;Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed&lt;/li&gt;&lt;li&gt;The name on the credit card used at check-in to pay for incidentals must be the primary name on the guestroom reservation&lt;/li&gt;&lt;li&gt;This property accepts credit cards, debit cards, and cash&lt;/li&gt;&lt;li&gt;Safety features at this property include a fire extinguisher, a security system, and a first aid kit&lt;/li&gt;  &lt;/ul&gt;  Special Instructions : This property offers transfers from the airport (surcharges may apply). Guests must contact the property with arrival details before travel, using the contact information on the booking confirmation. This property doesn't offer after-hours check-in. Front desk staff will greet guests on arrival.Minimum CheckIn Age : 18Mandatory Fees: &lt;p&gt;You'll be asked to pay the following charges at the property:&lt;/p&gt; &lt;ul&gt;&lt;li&gt;A tax is imposed by the city: AED 10.00 per accommodation, per night&lt;/li&gt;&lt;/ul&gt; &lt;p&gt;We have included all charges provided to us by the property. &lt;/p&gt;  Optional Fees: &lt;ul&gt; &lt;li&gt;Fee for continental breakfast: approximately AED 40.00 for adults and AED 25 for children&lt;/li&gt;&lt;li&gt;Airport shuttle fee: AED 200 per person (one-way)&lt;/li&gt;&lt;li&gt;Airport shuttle fee per child: AED 100 (one-way), (from 4 to 11 years old)&lt;/li&gt; &lt;li&gt;Rollaway bed fee: AED 120.0 per day&lt;/li&gt;&lt;/ul&gt; &lt;p&gt;The above list may not be comprehensive. Fees and deposits may not include tax and are subject to change. &lt;/p&gt;Cards Accepted: Visa,Debit cards,Cash,American Express,Mastercard&lt;ul&gt;  &lt;li&gt;Only registered guests are allowed in the guestrooms. &lt;/li&gt; &lt;li&gt;No pets and no service animals are allowed at this property. &lt;/li&gt; &lt;/ul&gt;,Service animals not allowed,Pets not allowed,Property confirms they are implementing guest safety measures,Temperature checks are available to guests,Social distancing measures are in place,Staff temperature checks are conducted regularly,Property confirms they are implementing enhanced cleaning measures,Guests are provided with free hand sanitizer,Property is cleaned with disinfectant,Staff wears personal protective equipment,Commonly-touched surfaces are cleaned with disinfectantW.e.f 31.03.2014, Government of Dubai is applying “Tourism Dirham” a fee ranging from AED 7-20 per room per night, which the guests availing the stay will have to pay to the hotel directly as applied before check-out.Please refer to the following Terms of Use - http://mytravelagent.online/termsofuse.pdfEarly check out will attract full cancellation charge unless otherwise specified.|<ul></ul><strong>City tax and Resort fee are to be paid directly at hotel if applicable.</strong>",
         `
      }
      ],},
      
      open: false },
  ];

  sightseeingData = [
    { id: 1, title: 'Sightseeing 1',cancellationPolicy: {content: 'Remarks',
      remarks: [
        {
          type: 'CONTRACT_REMARKS',
          text: ` "Type:CONTRACT_REMARKS,text:This is not an entry ticket; present this voucher at the ticketing counter to gain entry tickets. Guest must arrive at least 30 minutes prior to the show time. Seats are subject to availability; if the show is full guests will be asked to watch the next available slot. Ticket purchase is valid only for the show issued and NO REFUND/ NO TRANSFER.  Regular seats are on a free seating, first come first served basis. All entrants must pay AED5 entry fee to Creek Park; this charge is made by Dubai Municipality and is non negotiable. Dubai Dolphinarium reserve the right to refuse entry and to eject an individual for the reason of inappropriate behavior without refund or explanation. Dubai Dolphinarium General Terms and Conditions apply.\nMeeting point: Umm Hurair 2, Creek Park, gate 1 // Meeting point instructions: inside Creek Park. Make sure you arrive at the meeting point at least 15 minutes in advance // Start or opening time: depending on the option chosen // Return point: same as the meeting point // Duration: 30 minutes // Does not include: entrance to the Creek Park // Mandatory Instructions: Dubai Local Administration applies the mandatory 5 dirham payment (subject to change, non-negotiable and non-refundable) at the entrance to Creek Park. As of June 18, 2020, children under 12 years old and those over 60 years old will be able to visit the dolphinarium // Supplier name: Dubai Dolphinarium // Supplier emergency phone: +971 043 369 773. Ext 121. Telephone assistance languages : English // Voucher type: printed. Print and take the voucher to enjoy the activity // Voucher validity: one day. Show Schedule: Dolphin and Seal show - 11am, 2pm and 5pm (everyday except Tuesday). Exotic Bird show - 12:15pm, 3:15pm and 6:15pm (everyday except Tuesday).. Important Information :- [\n  \"Children under 2 years old go for free.</br> A charge of AED5 per person is charged at the gate; this is set by Dubai Municipality and is non-negotiable nor refundable. \"\n]."`
        },
      ]
     },
       open: false },

       { id: 2, title: 'Sightseeing 1',cancellationPolicy: {content: 'Remarks',
        remarks: [
          {
            type: 'CONTRACT_REMARKS',
            text: ` "Type:CONTRACT_REMARKS,text:This is not an entry ticket; present this voucher at the ticketing counter to gain entry tickets. Guest must arrive at least 30 minutes prior to the show time. Seats are subject to availability; if the show is full guests will be asked to watch the next available slot. Ticket purchase is valid only for the show issued and NO REFUND/ NO TRANSFER.  Regular seats are on a free seating, first come first served basis. All entrants must pay AED5 entry fee to Creek Park; this charge is made by Dubai Municipality and is non negotiable. Dubai Dolphinarium reserve the right to refuse entry and to eject an individual for the reason of inappropriate behavior without refund or explanation. Dubai Dolphinarium General Terms and Conditions apply.\nMeeting point: Umm Hurair 2, Creek Park, gate 1 // Meeting point instructions: inside Creek Park. Make sure you arrive at the meeting point at least 15 minutes in advance // Start or opening time: depending on the option chosen // Return point: same as the meeting point // Duration: 30 minutes // Does not include: entrance to the Creek Park // Mandatory Instructions: Dubai Local Administration applies the mandatory 5 dirham payment (subject to change, non-negotiable and non-refundable) at the entrance to Creek Park. As of June 18, 2020, children under 12 years old and those over 60 years old will be able to visit the dolphinarium // Supplier name: Dubai Dolphinarium // Supplier emergency phone: +971 043 369 773. Ext 121. Telephone assistance languages : English // Voucher type: printed. Print and take the voucher to enjoy the activity // Voucher validity: one day. Show Schedule: Dolphin and Seal show - 11am, 2pm and 5pm (everyday except Tuesday). Exotic Bird show - 12:15pm, 3:15pm and 6:15pm (everyday except Tuesday).. Important Information :- [\n  \"Children under 2 years old go for free.</br> A charge of AED5 per person is charged at the gate; this is set by Dubai Municipality and is non-negotiable nor refundable. \"\n]."`
          },
        ]
       },
         open: false },

         { id: 3, title: 'Sightseeing 1',cancellationPolicy: {content: 'Remarks',
          remarks: [
            {
              type: 'CONTRACT_REMARKS',
              text: ` "Type:CONTRACT_REMARKS,text:This is not an entry ticket; present this voucher at the ticketing counter to gain entry tickets. Guest must arrive at least 30 minutes prior to the show time. Seats are subject to availability; if the show is full guests will be asked to watch the next available slot. Ticket purchase is valid only for the show issued and NO REFUND/ NO TRANSFER.  Regular seats are on a free seating, first come first served basis. All entrants must pay AED5 entry fee to Creek Park; this charge is made by Dubai Municipality and is non negotiable. Dubai Dolphinarium reserve the right to refuse entry and to eject an individual for the reason of inappropriate behavior without refund or explanation. Dubai Dolphinarium General Terms and Conditions apply.\nMeeting point: Umm Hurair 2, Creek Park, gate 1 // Meeting point instructions: inside Creek Park. Make sure you arrive at the meeting point at least 15 minutes in advance // Start or opening time: depending on the option chosen // Return point: same as the meeting point // Duration: 30 minutes // Does not include: entrance to the Creek Park // Mandatory Instructions: Dubai Local Administration applies the mandatory 5 dirham payment (subject to change, non-negotiable and non-refundable) at the entrance to Creek Park. As of June 18, 2020, children under 12 years old and those over 60 years old will be able to visit the dolphinarium // Supplier name: Dubai Dolphinarium // Supplier emergency phone: +971 043 369 773. Ext 121. Telephone assistance languages : English // Voucher type: printed. Print and take the voucher to enjoy the activity // Voucher validity: one day. Show Schedule: Dolphin and Seal show - 11am, 2pm and 5pm (everyday except Tuesday). Exotic Bird show - 12:15pm, 3:15pm and 6:15pm (everyday except Tuesday).. Important Information :- [\n  \"Children under 2 years old go for free.</br> A charge of AED5 per person is charged at the gate; this is set by Dubai Municipality and is non-negotiable nor refundable. \"\n]."`
            },
          ]
         },
           open: false },

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
  // fareRules = {
  //   domestic: {
      
  //     changeFee: 'INR 2500',
  //     cancellationFee: 'INR 3000',
  //     baggageAllowance: '15 kg'
  //   },
  //   international: {
      
  //     changeFee: 'INR 3500',
  //     cancellationFee: 'INR 4500',
  //     baggageAllowance: [
  //       'Ex India to Male: 20 kg',
  //       'Ex India to Muscat: 30 kg',
       
  //     ]
  //   },
  //   otherCharges: 'Apart from airline charges, GST, RAF, and any applicable charges will be added.',
  //   requestTimes: {
  //     domestic: 'At least 2 hours before the airline\'s cancellation and reissue policy.',
  //     international: 'At least 4 hours before the airline\'s cancellation and reissue policy.'
  //   }
  // };

  // isModalVisible = false;

  // openfareModal(event: Event): void {
  //   event.preventDefault(); 
  //   this.isModalVisible = true;
  // }

  // closefareModal(): void {
  //   this.isModalVisible = false;
  // }


//remarks formatting
formatRemarks(remarkText: string): string {
  return remarkText
    .replace('Type:CONTRACT_REMARKS,text:', '')
    .replace(/\[\s*"(.*?)"\s*\]/g, '$1') 
    .replace(/\/\//g, '<br>')
    .replace(/;/g, ';<br>') 
    .replace(/\.\s/g, '.<br>') 
    .replace(/Guest/g, '<br>Guest') 
    .replace(/NO REFUND\/ NO TRANSFER/g, '<strong>NO REFUND/ NO TRANSFER</strong>') 
    .replace(/Important Information/g, '<strong>Important Information</strong>') 
    .replace(/(Supplier emergency phone: [^<]+)/g, '<strong>$1</strong>') 
    .replace(/Make sure you arrive at the meeting point at least 15 minutes in advance/g, '<em>Make sure you arrive at the meeting point at least 15 minutes in advance</em>') // Italicize specific instruction
    .replace(/Meeting point:/g, '<br><strong>Meeting point:</strong>') 
    .replace(/Start or opening time:/g, '<strong>Start or opening time:</strong>') 
    .replace(/Return point:/g, '<strong>Return point:</strong>')
    .replace(/Duration:/g, '<strong>Duration:</strong>') 
    .replace(/Does not include:/g, '<strong>Does not include:</strong>')
    .replace(/Mandatory Instructions:/g, '<strong>Mandatory Instructions:</strong>')
    .replace(/Dubai Dolphinarium reserve the right/g, '<br>Dubai Dolphinarium reserve the right')
    .replace(/Show Schedule:/g, '<br><strong>Show Schedule:</strong>')
    .replace(/Children under 2 years old go for free/g, '<em>Children under 2 years old go for free</em>') 
    .trim(); 
}

//hotelnorms formatting
formatHotelDetails(hotelText: string): string {
  return hotelText
    .replace(/<ul><\/ul>/g, '') 
    .replace(/&lt;/g, '<') 
    .replace(/&gt;/g, '>')
    .replace(/\r\n/g, '<br>') 
    .replace(/\|/g, '<br>') 
    .replace(/CheckIn Time-Begin:/g, '<br><strong>CheckIn Time-Begin:</strong>') 
    .replace(/CheckIn Time-End:/g, '<br><strong>CheckIn Time-End:</strong>')
    .replace(/CheckOut Time:/g, '<br><strong>CheckOut Time:</strong>')
    .replace(/CheckIn Instructions:/g, '<br><strong>CheckIn Instructions:</strong><br>')
    .replace(/Special Instructions :/g, '<br><strong>Special Instructions:</strong><br>')
    .replace(/Mandatory Fees:/g, '<br><strong>Mandatory Fees:</strong><br>')
    .replace(/Optional Fees:/g, '<br><strong>Optional Fees:</strong><br>')
    .replace(/Cards Accepted:/g, '<br><strong>Cards Accepted:</strong><br>')
    .replace(/<li>/g, '<br>&bull; ') 
    .replace(/<\/li>/g, '') 
    .replace(/<p>/g, '<br>') 
    .replace(/<\/p>/g, '<br>')
    .replace(/City tax and Resort fee are to be paid directly at hotel if applicable\./g, '<br><strong>City tax and Resort fee are to be paid directly at hotel if applicable.</strong>')
    .replace(/Early check out will attract full cancellation charge unless otherwise specified\./g, '<br><em>Early check out will attract full cancellation charge unless otherwise specified.</em>')
    .trim();
}


//farerules formatting
formatFareRuleDetail(fareRuleDetail: string): string {
  // Replace newlines with <br> for consistency
  let formattedDetail = fareRuleDetail.replace(/\n/g, '<br>');

  // Apply formatting to specific sections
  formattedDetail = formattedDetail.replace('Domestic:', '<br><strong>Domestic:</strong>');
  formattedDetail = formattedDetail.replace('International:', '<br><strong>International:</strong>');
  formattedDetail = formattedDetail.replace('Sector Free Bag Allowance', '<br><strong>Sector Free Bag Allowance</strong>');

  // Emphasize specific important notices
  formattedDetail = formattedDetail.replace(
    'APART FROM AIRLINE CHARGES,GST+RAF+ APPLICABLE CHARGES IF ANY, WILL BE CHARGED.',
    '<br><strong>APART FROM AIRLINE CHARGES, GST+RAF+ APPLICABLE CHARGES IF ANY, WILL BE CHARGED.</strong>'
  );
  formattedDetail = formattedDetail.replace(
    'MENTIONED FEE ARE INDICATIVE PER PAX AND PER SECTOR.',
    '<strong>MENTIONED FEE ARE INDICATIVE PER PAX AND PER SECTOR.</strong>'
  );
  formattedDetail = formattedDetail.replace(
    'FOR DOMESTIC BOOKINGS, PASSENGERS ARE REQUIRED TO SUBMIT THE CANCELLATION OR REISSUE REQUEST AT LEAST 2 HOURS BEFORE THE AIRLINES CANCELLATION AND REISSUE POLICY.',
    '<strong>FOR DOMESTIC BOOKINGS, PASSENGERS ARE REQUIRED TO SUBMIT THE CANCELLATION OR REISSUE REQUEST AT LEAST 2 HOURS BEFORE THE AIRLINES CANCELLATION AND REISSUE POLICY.</strong>'
  );
  formattedDetail = formattedDetail.replace(
    'FOR INTERNATIONAL BOOKINGS, PASSENGERS ARE REQUIRED TO SUBMIT THE CANCELLATION OR REISSUE REQUEST AT LEAST 4 HOURS BEFORE THE AIRLINES CANCELLATION AND REISSUE POLICY.',
    '<strong>FOR INTERNATIONAL BOOKINGS, PASSENGERS ARE REQUIRED TO SUBMIT THE CANCELLATION OR REISSUE REQUEST AT LEAST 4 HOURS BEFORE THE AIRLINES CANCELLATION AND REISSUE POLICY.</strong>'
  );

  // Apply line breaks and bold formatting to "Ex" lines
  formattedDetail = formattedDetail.replace(/(Ex [^ ]+ to .+? Kgs)/g, '<br><strong>$1</strong>');

  // Ensure lists (if any) are correctly formatted with breaks
  formattedDetail = formattedDetail.replace(/<ul>/g, '<br><ul>');
  formattedDetail = formattedDetail.replace(/<\/ul>/g, '</ul><br>');

  // Trim any excess whitespace at the beginning or end of the string
  return formattedDetail.trim();
}



//modal for hotel description and attractions
showModal1 = false;
modalContent = '';

openModal1(contentType: string, event: Event) {
  event.preventDefault();
  this.modalContent = this.hotelDetails[contentType];
  this.showModal1 = true;
}

closeModal1() {
  this.showModal1 = false;
}

hotelDetails = {
  Description: `<p>HeadLine : Near Gold Souk</p><p>Location : With a stay at Landmark Hotel in Dubai (Deira), you ll be a 3-minute drive from Gold Souk and 8 minutes from Dubai Cruise Terminal.  This hotel is 8 mi (12.9 km) from Dubai Mall and 8.3 mi (13.3 km) from Burj Khalifa.</p><p>Rooms : Make yourself at home in one of the 168 air-conditioned rooms featuring minibars. Complimentary wireless Internet access keeps you connected, and cable programming is available for your entertainment. Bathrooms feature shower/tub combinations, complimentary toiletries, and bathrobes. Conveniences include phones, as well as safes and desks.</p><p>Dining : Grab a bite at THE PALMS, one of the hotel s 2 restaurants, or stay in and take advantage of the 24-hour room service. Continental breakfasts are available daily from 7:00 AM to 10:00 AM for a fee.</p><p>CheckIn Instructions : <ul>  <li>Extra-person charges may apply and vary depending on property policy</li><li>Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges</li><li>Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed</li><li>The name on the credit card used at check-in to pay for incidentals must be the primary name on the guestroom reservation</li><li>This property accepts credit cards, debit cards, and cash</li><li>Safety features at this property include a fire extinguisher, a smoke detector, a security system, and a first aid kit</li>  </ul></p><p>Special Instructions : This property offers transfers from the airport (surcharges may apply). Guests must contact the property with arrival details before travel, using the contact information on the booking confirmation. This property doesn t offer after-hours check-in. Front desk staff will greet guests on arrival.</p>&nbsp;<br/><b>Disclaimer notification: Amenities are subject to availability and may be chargeable as per the hotel policy.</b>&nbsp; <br />`,
  Attractions: `<p>Naif Souq - 0.5 km / 0.3 mi <br /> Deira Twin Towers Shopping Centre - 0.5 km / 0.3 mi <br /> Spice Souk - 0.9 km / 0.6 mi <br /> Perfume Souq - 0.9 km / 0.6 mi <br /> Gold Souk - 1 km / 0.6 mi <br /> Fish Roundabout - 1.3 km / 0.8 mi <br /> Al Ghurair Centre - 1.5 km / 0.9 mi <br /> Palm Islands - 1.6 km / 1 mi <br /> Reef Mall - 1.8 km / 1.1 mi <br /> Grand Mosque - 2 km / 1.3 mi <br /> Sheikh Saeed Al Maktoum House - 2.1 km / 1.3 mi <br /> The Dubai Heritage Village - 2.1 km / 1.3 mi <br /> Dubai Museum - 2.2 km / 1.4 mi <br /> Textile Souk - 2.2 km / 1.4 mi <br /> Meena Bazaar - 2.3 km / 1.4 mi <br /> </p><p>The nearest airports are:<br />Dubai Intl. Airport (DXB) - 7.2 km / 4.5 mi<br /> Sharjah (SHJ-Sharjah Intl.) - 31.3 km / 19.5 mi<br /> Al Maktoum Intl. Airport (DWC) - 68.3 km / 42.4 mi<br /> </p><p>The preferred airport for Landmark Hotel is Dubai Intl. Airport (DXB). </p>`
};
formatHotelPolicyDetail(content: string): string {
  let formattedContent = content;
  formattedContent = formattedContent
  return formattedContent
      
    .replace(/<br \/>/g, '<br>')
    .replace(/\n/g, '<br>')
    .replace(/\|<ul><\/ul>\|/g, '')
    .replace(/Description:/g, '<br><strong class="text-xs">Description:</strong>')
    .replace(/Dining:/g, '<br><strong class="text-xs">Dining:</strong>')
    .replace(/CheckIn Instructions:/g, '<br><strong class="text-xs">Check-In Instructions:</strong>')
    .replace(/Special Instructions :/g, '<br><strong class="text-xs">Special Instructions:</strong>')
    .replace(/Disclaimer notification:/g, '<br><strong class="text-xs">Disclaimer notification:</strong>')
    .replace(/<ul>/g, '<ul class="text-xs">')
    .replace(/<\/ul>/g, '</ul class="text-xs">')
    .replace(/<li>/g, '<li class="text-xs">')
    .replace(/<\/li>/g, '</li class="text-xs">')
    .replace(/Amenities are subject to availability and may be chargeable as per the hotel policy./g, '<br><strong class="text-xs">Amenities are subject to availability and may be chargeable as per the hotel policy.</strong>')
    .replace(/<\/p>/g, '</p class="text-xs">')
    .replace(/<p>/g, '<p class="text-xs">')
    .replace(/<strong>/g, '<strong class="text-xs">')
    .replace(/<\/strong>/g, '</strong class="text-xs">');
}

//format date
formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}


}


  