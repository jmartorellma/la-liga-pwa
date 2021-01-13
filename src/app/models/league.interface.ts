import { Filters } from './filters.interface';
import { Competition } from './competition.interface';
import { Season } from './season.interface';
import { Team } from './team.interface';

export interface League {
  count: number;
  filters: Filters;
  competition: Competition;
  season: Season;
  teams: Team[];
}

// export interface Team {
//   id: number;
//   area: Area;
//   name: string;
//   shortName: string;
//   tla: string;
//   crestUrl: string;
//   address: string;
//   phone: string;
//   website: string;
//   email: string;
//   founded: number;
//   clubColors: string;
//   venue: string;
//   lastUpdated: string;
// }
