import { Area } from './area.interface';

export interface Competition {
    id: number;
    area: Area;
    name: string;
    code: string;
    plan: string;
    lastUpdated: string;
}