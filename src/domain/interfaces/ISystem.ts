import IClass from './IClass';
import IRace from './IRace';

export default interface ISystem {
  getPrimaryAbilitiesList(): string[]; //List with abilities names
  getSecondaryAbilitiesList(): string[]; //List with secondary abilities names
  getClassList(): IClass[];
  getRaceList(): IRace[];
  checkExperienceToNextLevel(charExp: number, charLevel: number): number;
  getLevelExperienceLadder(): Object;
}
