import IClass from './IClass';
import IRace from './IRace';
import ICharacter from './ICharacter';

export default interface ISystem {
  // Getters
  getPrimaryAbilitiesList(): string[]; //List with abilities names
  getSecondaryAbilitiesList(): string[]; //List with secondary abilities names
  getClassList(): IClass[];
  getRaceList(): IRace[];
  getMaxLevel(): number;
  getLevelExperienceLadder(): {[P: number]: number};

  // Factories
  createCharacter(): ICharacter;

  // Checkers
  checkExperienceToNextLevel(charExp: number, charLevel: number): number;
}
