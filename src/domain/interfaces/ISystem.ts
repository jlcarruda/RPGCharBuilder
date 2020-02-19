import IClass from './IClass';
import IRace from './IRace';

export default interface ISystem {
  // Getters
  getPrimaryAbilitiesList(): string[]; //List with abilities names
  getSecondaryAbilitiesList(): string[]; //List with secondary abilities names
  getClassList(): IClass[];
  getRaceList(): IRace[];
  getLevelExperienceLadder(): {[P: number]: number};

  // Checkers
  checkExperienceToNextLevel(charExp: number, charLevel: number): number;
}
