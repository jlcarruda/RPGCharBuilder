import IClass from './IClass';
import IAbility from './IAbility';

export default interface ICharacter {
  name: string;
  getLevel(): number;
  getAbilities(): IAbility[];
  getTotalExp(): number;
  getExpToNextLevel(): number;
  addExp(experience: number): number;
  getClass(): IClass;
};
