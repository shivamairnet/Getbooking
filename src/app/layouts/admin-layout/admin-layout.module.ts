import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { CollectionsComponent } from '../../pages/collections/collections.component';
import { CheckoutComponent } from '../../pages/checkout/checkout.component';
import { AboutUsComponent } from '../../pages/about-us/about-us.component';
import { FlightSearchComponent } from 'src/app/pages/flight-search/flight-search.component';
import { PackagegenerateComponent } from 'src/app/pages/packagegenerate/packagegenerate.component';
import { VouchersComponent } from 'src/app/pages/vouchers/vouchers.component';
import { ConfirmcancelComponent } from 'src/app/pages/confirmcancel/confirmcancel.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    CollectionsComponent,
    CheckoutComponent,
    AboutUsComponent,
    PackagegenerateComponent,
    VouchersComponent,
    ConfirmcancelComponent
    // TesterComponent
  
    
   

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})

export class AdminLayoutModule {}