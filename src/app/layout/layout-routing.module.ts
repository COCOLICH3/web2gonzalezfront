import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SearchUsersComponent} from './search-users/search-users.component';
import {UsersListComponent} from './users-list/users-list.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {DashboardAdminComponent} from './dashboard-admin/dashboard-admin.component';
import {ConfigComponent} from './config/config.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {path: '', redirectTo: 'dashboard'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'dashboard-admin', component: DashboardAdminComponent},
    {path: 'add', component: CreateUserComponent},
    {path: 'findbyemail', component: SearchUsersComponent},
    {path: 'user', component: UsersListComponent},
    {path: 'config', component: ConfigComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
