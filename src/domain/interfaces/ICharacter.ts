import IClass from './IClass';
import IAbility from './IAbility';
import ISystem from './ISystem';
import IRace from './IRace';

export default interface ICharacter {
  name: string;
  getLevel(): number;
  getPrimaryAbilities(): IAbility[];
  getSecondaryAbilities(): IAbility[];
  getTotalExp(): number;
  getExpToNextLevel(system: ISystem): number;
  addExp(experience: number): number;

  getClass(): IClass;
  getRace(): IRace;
}
