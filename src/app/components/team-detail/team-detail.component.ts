import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/models/team.interface';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  team: Team;

  constructor(private teamsService: TeamsService,
              private ativatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const identifier = this.ativatedRoute.snapshot.paramMap.get('id');
    console.log('Identifer --->', identifier);

    this.teamsService.getTeamById(identifier).subscribe((team) => {
      if(!team){
        return this.router.navigateByUrl('/');
      }
      this.team = team;
      console.log(this.team);
    });
  }

}
