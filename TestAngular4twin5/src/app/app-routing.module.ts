import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTeamComponent } from './components/form-team/form-team.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



  const routes: Routes = [
    { path: '', redirectTo: '/showteams', pathMatch: 'full' },
    { path: 'showteams', loadChildren: () => import('./team/team.module').then(m => m.TeamModule) },
    { path: 'addteam', component:FormTeamComponent },
    { path: 'showmyteams', loadChildren: () => import('./team/team.module').then(m => m.TeamModule) },
    { path: '**', component:NotFoundComponent},
  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
