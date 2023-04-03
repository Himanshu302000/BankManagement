import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent
  }
  ,
  {
    path:'login',
    component:LoginComponent
  }
  ,
  {
    path:'sidebar',
    component:SidebarComponent
  }
  ,
  {
    path:'withdraw',
    component:WithdrawComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
