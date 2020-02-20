import ICharacter from 'src/domain/interfaces/ICharacter';
import ISystem from 'src/domain/interfaces/ISystem';
import IClass from 'src/domain/interfaces/IClass';
import IAbility from 'src/domain/interfaces/IAbility';
import IRace from 'src/domain/interfaces/IRace';

export default class DND5eCharacter implements ICharacter {
  public name: string;

  private primaryAbilities: IAbility[];
  private secondaryAbilities: IAbility[];
  private experience: number;
  private level: number;
  private characterClass: IClass;
  private characterRace: IRace;

  constructor(
    name: string,
    charClass: IClass,
    race: IRace,
    primaryAbilities: IAbility[],
    secondaryAbilities: IAbility[],
  ) {
    this.name = name;
    this.characterClass = charClass;
    this.characterRace = race;
    this.level = 1;
    this.experience = 0;

    this.primaryAbilities = primaryAbilities;
    this.secondaryAbilities = secondaryAbilities;
  }

  getPrimaryAbilities(): IAbility[] {
    return this.primaryAbilities;
  }

  getSecondaryAbilities(): IAbility[] {
    return this.secondaryAbilities;
  }

  getLevel(): number {
    return this.level;
  }

  getTotalExp(): number {
    return this.experience;
  }

  getExpToNextLevel(system: ISystem): number {
    return system.checkExperienceToNextLevel(this.experience, this.level);
  }

  addExp(experience: number): number {
    this.experience += experience;
    return this.experience;
  }

  getClass(): IClass {
    return this.characterClass;
  }

  getRace(): IRace {
    return this.characterRace;
  }
}
