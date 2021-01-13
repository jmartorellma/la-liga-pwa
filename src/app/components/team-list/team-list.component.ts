import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.interface';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: Team[] = [];

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsService
      .getLeagueTeams()
      .subscribe((teams: Team[]) => {        
        this.teams = teams.sort((a, b) => a.tla.localeCompare(b.tla));
        console.log(this.teams);
      });
  }

}
