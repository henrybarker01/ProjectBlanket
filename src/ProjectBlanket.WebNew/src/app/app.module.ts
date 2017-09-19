import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { GridsterModule } from 'angular-gridster2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

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
import { QuoteWidget } from './components/dashboard/widgets/quote-widget/quote-widget.component'
 

//services
import { UserService } from './services/user.service';
import { AlertService } from './services/alert.service';
import { QuoteService } from './services/quote.service';
import { AuthenticationService } from './services/authentication.service';

//helpers
import { AuthGuard } from './helpers/auth';

//interceptors
import { AuthInterceptor } from './interceptors/authentication.inteceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, GridsterModule, BrowserAnimationsModule, MdButtonModule, MdCheckboxModule],//Ng2Bs3ModalModule   
  declarations: [AppComponent, TopNavigationComponent, QuotesComponent, ContractReviewComponent, SideListComponent, RegisterComponent, LoginComponent, AlertComponent, DashboardComponent, QuoteWidget],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    },
    UserService, QuoteService, AuthenticationService, AuthGuard, AlertService],
  bootstrap: [AppComponent],
  entryComponents: [QuoteWidget]

})
export class AppModule { }
