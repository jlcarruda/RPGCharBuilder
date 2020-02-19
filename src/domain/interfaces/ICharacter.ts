import IClass from './IClass';
import IAbility from './IAbility';

export default interface ICharacter {
  name: string;
  getLevel(): number;
  getPrimaryAbilities(): IAbility[];
  getSecondaryAbilities(): IAbility[];
  getTotalExp(): number;
  getExpToNextLevel(): number;
  addExp(experience: number): number;

  getClass(): IClass;
};
