import { participant } from "./participant";

export class team {
    id!: number;
    name!: string;
    projectName!: string;
    level!: string;
    projectDescription!: string;
    participants!: participant[];
  }
  