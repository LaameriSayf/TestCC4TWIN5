import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.css']
})
export class FormTeamComponent implements OnInit {
  teamForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private teamService: TeamService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.teamForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      projectName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      level: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      projectDescription: ['', [Validators.minLength(5)]],
      participants: this.fb.array([]) 
    });
  }

  addParticipant() {
    const participant = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.participants.push(participant);
  }

  get participants() {
    return (this.teamForm.get('participants') as any).controls;
  }

  onSubmit() {
    if (this.teamForm.valid) {
      const teamData = this.teamForm.value;
      this.teamService.addTeam(teamData).subscribe(() => {
        this.router.navigate(['/showteams']);
      });
    }
  }
}
