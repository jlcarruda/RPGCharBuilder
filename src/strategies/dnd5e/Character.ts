import ICharacter from 'src/domain/interfaces/ICharacter';
import ISystem from 'src/domain/interfaces/ISystem';
import IClass from 'src/domain/interfaces/IClass';
import IAbility from 'src/domain/interfaces/IAbility';

export default class DND5eCharacter implements ICharacter {
  public name: string;

  private primaryAbilities: IAbility[];
  private secondaryAbilities: IAbility[];
  private experience: number;
  private level: number;
  private characterClass: IClass;

  constructor(
    name: string,
    charClass: IClass,
    primaryAbilities: IAbility[],
    secondaryAbilities: IAbility[],
  ) {
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

  public getExpToNextLevel(system: ISystem): number {
    return system.checkExperienceToNextLevel(this.experience, this.level);
  }

  public addExp(experience: number): number {
    this.experience += experience;
    return this.experience;
  }

  public getClass(): IClass {
    return this.characterClass;
  }
}
