import IClass from './IClass';

export default interface ISystem {
  getAbilitiesList(): string[]; //List with abilities names
  getClassList(): IClass[];
  checkExperienceToNextLevel(charExp: number, charLevel: number): number;
  getLevelExperienceLadder(): Object;
}
