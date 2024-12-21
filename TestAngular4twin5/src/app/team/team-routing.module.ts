import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTeamComponent } from '../components/form-team/form-team.component';
import { TeamsComponent } from '../components/my-teams/my-teams.component';
import { ParticipantsComponent } from '../components/participants/participants.component';

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
