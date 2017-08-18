import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { ContractReviewComponent } from './components/contract-review/contract-review.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { UserService } from './Service/user.service';
import { SideListComponent } from './components/side-list/side-list.component';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule],
    declarations: [AppComponent, UserComponent, HomeComponent, TopNavigationComponent, QuotesComponent, ContractReviewComponent, SideListComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, UserService],
    bootstrap: [AppComponent]

})
export class AppModule { }
