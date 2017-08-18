import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { QuotesComponent } from './components/quotes/quotes.component'; 
import { ContractReviewComponent } from './components/contract-review/contract-review.component'

const appRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'quotes', component: QuotesComponent },
    { path: 'contract-review', component: ContractReviewComponent }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);