import { Area } from './area.interface';
import { Competition } from './competition.interface';
import { Player } from './player.interface';

export interface Team {
  id: number;
  area: Area;
  activeCompetitions: Competition[];
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  squad: Player[];
  lastUpdated: string;
}
