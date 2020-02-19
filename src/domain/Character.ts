import ICharacter from './interfaces/ICharacter';
import ISystem from './interfaces/ISystem';
import IClass from './interfaces/IClass';
import IAbility from './interfaces/IAbility';

export default class Character implements ICharacter {
  public name: string;

  private system: ISystem;
  private primaryAbilities: IAbility[];
  private secondaryAbilities: IAbility[];
  private experience: number;
  private level: number;
  private characterClass: IClass;

  constructor(
    system: ISystem,
    name: string,
    charClass: IClass,
    primaryAbilities: IAbility[],
    secondaryAbilities: IAbility[],
  ) {
    this.system = system;
    this.name = name;
    this.characterClass = charClass;
    this.level = 1;
    this.experience = 0;

    this.primaryAbilities = primaryAbilities;
    this.secondaryAbilities = secondaryAbilities;

    // this.primaryAbilities = this.system
    //   .getPrimaryAbilitiesList()
    //   .map(ab => ({[ab]: 0}));

    // this.secondaryAbilities = this.system
    //   .getSecondaryAbilitiesList()
    //   .map(ab => ({[ab]: 0}));
  }

  public getPrimaryAbilities(): IAbility[] {
    return this.primaryAbilities;
  }

  public getSecondaryAbilities(): IAbility[] {
    return this.secondaryAbilities;
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
