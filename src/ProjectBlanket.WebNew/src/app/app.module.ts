import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { routing } from './app.routing';
import { GridsterModule } from 'angular-gridster2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMenuModule,
  MatSelectModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { FileUploadModule } from 'ng2-file-upload';

//components
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { ContractReviewComponent } from './components/contract-review/contract-review.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { SideListComponent } from './components/side-list/side-list.component';
import { RegisterComponent } from './components/security/register/register.component';
import { LoginComponent } from './components/security/login/login.component';
import { AlertComponent } from './directives/alert/alert.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuoteWidget } from './components/dashboard/widgets/quote-widget/quote-widget.component';
import { EquipmentComponent } from './components/equipment/equipment.component'
import { HeaderComponent } from "./components/page-header/page-header.component";

//Dashboard Components
import { CalibrationDueWidget } from "./components/dashboard/widgets/calibration-due/calibration-due-widget.component";

//services
import { UserService } from './services/user.service';
import { AlertService } from './services/alert.service';
import { QuoteService } from './services/quote.service';
import { AuthenticationService } from './services/authentication.service';
import { EquipmentService } from './services/equipment.service';
import { DashboardService } from "./services/dashboard.service";

//helpers
import { AuthGuard } from './helpers/auth';

//interceptors
import { AuthInterceptor } from './interceptors/authentication.inteceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  imports: [BrowserModule,
    ReactiveFormsModule,
    routing,
    GridsterModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatSelectModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatProgressSpinnerModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule],

  declarations: [AppComponent,
    TopNavigationComponent,
    QuotesComponent,
    ContractReviewComponent,
    SideListComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent,
    DashboardComponent,
    QuoteWidget,
    HeaderComponent,
    CalibrationDueWidget,
    EquipmentComponent],

  providers: [{ provide: APP_BASE_HREF, useValue: '/' },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    UserService,
    QuoteService,
    AuthenticationService,
    AuthGuard,
    AlertService,
    EquipmentService,
    DashboardService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
