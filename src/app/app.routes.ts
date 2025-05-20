import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SignupComponent } from '../signup/signup.component';
import { StoreComponent } from '../store/store.component';
import { PaymentComponent } from '../payment/payment.component';
import { DeliveryComponent } from '../delivery/delivery.component';
import { PickupComponent } from '../pickup/pickup.component';
import { BusinesssignupComponent } from '../businesssignup/businesssignup.component';
import { MenuComponent } from '../menu/menu.component';
import { BusinessreviewComponent } from '../businessreview/businessreview.component';
import { ProfileComponent } from '../profile/profile.component';
import { InboxComponent } from '../inbox/inbox.component';
import { HistoryComponent } from '../history/history.component';
import { MobileAuthComponent } from '../mobile-auth/mobile-auth.component';
export const routes: Routes = [
    // kada update/change ng path please paki push agad sa git
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'store' , component: StoreComponent},
    {path: 'payment', component: PaymentComponent},
    {path: 'delivery', component: DeliveryComponent},
    {path: 'pickup', component: PickupComponent},
    {path: 'b/register', component: BusinesssignupComponent},
    {path: 'b/menu', component: MenuComponent},
    {path: 'b/reviews', component: BusinessreviewComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'inbox', component: InboxComponent},
    {path: 'b/history', component: HistoryComponent},
    {path: 'm/login', component: MobileAuthComponent}
];
