import ICharacter from './interfaces/ICharacter';
import ISystem from './interfaces/ISystem';
import IClass from './interfaces/IClass';
import IAbility from './interfaces/IAbility';

export default class Character implements ICharacter {
  public name: string;

  private system: ISystem;
  private abilities: IAbility[];
  private experience: number;
  private level: number;
  private characterClass: IClass;

  constructor(system: ISystem, name: string, charClass: IClass) {
    this.system = system;
    this.name = name;
    this.characterClass = charClass;
    this.level = 1;
    this.experience = 0;

    this.abilities = this.system.getAbilitiesList().map(ab => ({[ab]: 0}));
  }

  public getAbilities(): IAbility[] {
    return this.abilities;
  }

  public getLevel(): number {
    return this.level;
  }

  public getTotalExp(): number {
    return this.experience;
  }

  public getExpToNextLevel(): number {
    return this.system.checkExperienceToNextLevel(this.experience, this.level);
  }

  public addExp(experience: number): number {
    this.experience += experience;
    return this.experience;
  }

  public getClass(): IClass {
    return this.characterClass;
  }
}
