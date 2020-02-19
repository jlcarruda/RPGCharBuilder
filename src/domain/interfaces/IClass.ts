import IClassAbility from './IClassAbility';

export default interface IClass {
  getName(): string;
  getClassAbilitiesList(): IClassAbility[]; // class abilities list
  getClassAbilitiesUntilLevel(level: number): IClassAbility[];
};
