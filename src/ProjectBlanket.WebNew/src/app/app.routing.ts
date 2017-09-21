import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './components/quotes/quotes.component';
import { ContractReviewComponent } from './components/contract-review/contract-review.component'
import { RegisterComponent } from './components/security/register/register.component'
import { LoginComponent } from './components/security/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './helpers/auth';
import { EquipmentComponent } from './components/equipment/equipment.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'quotes', component: QuotesComponent, canActivate: [AuthGuard] },
    { path: 'equipment', component: EquipmentComponent, canActivate: [AuthGuard]},
    { path: 'contract-review', component: ContractReviewComponent, canActivate: [AuthGuard] }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);
