import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout/layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersListComponent} from './users-list/users-list.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {SearchUsersComponent} from './search-users/search-users.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {FormsModule} from '@angular/forms';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ConfigComponent } from './config/config.component';
import { WallComponent } from './wall/wall.component';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UsersListComponent,
    SearchUsersComponent,
    DashboardAdminComponent,
    ConfigComponent,
    WallComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule
  ]
})
export class LayoutModule {
}
