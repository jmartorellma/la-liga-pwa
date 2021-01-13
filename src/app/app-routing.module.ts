import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { TeamListComponent } from './components/team-list/team-list.component';

const routes: Routes = [
  {path: '', component: TeamListComponent},
  {path: 'team/:id', component: TeamDetailComponent},
  {path: '**', component: TeamListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
