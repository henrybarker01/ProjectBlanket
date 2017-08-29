﻿import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { ContractReviewComponent } from './components/contract-review/contract-review.component'
import { RegisterComponent } from './components/security/register/register.component'
import { LoginComponent } from './components/security/login/login.component';
import { AuthGuard } from './Helpers/auth';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
    { path: 'quotes', component: QuotesComponent, canActivate: [AuthGuard] },
    { path: 'contract-review', component: ContractReviewComponent, canActivate: [AuthGuard] }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);