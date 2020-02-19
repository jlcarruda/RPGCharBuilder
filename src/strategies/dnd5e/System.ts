import ISystem from 'src/domain/interfaces/ISystem';
import IClass from 'src/domain/interfaces/IClass';
import IRace from 'src/domain/interfaces/IRace';
import DND5eCharacterFactory from './factories/CharacterFactory';

type AbilityDescription = {initials: string; name: string};
type LevelingLadder = {[P: number]: number};

export default class DND5eSystem implements ISystem {
  private _instance: DND5eSystem | null = null;

  private characterFactory: DND5eCharacterFactory;

  private primaryAbilities: AbilityDescription[] = [
    {initials: 'STR', name: 'Strength'},
    {initials: 'DEX', name: 'Dexterity'},
    {initials: 'CON', name: 'Constitution'},
    {initials: 'INT', name: 'Inteligence'},
    {initials: 'WIS', name: 'Wisdom'},
    {initials: 'CHA', name: 'Charisma'},
  ];

  private secondaryAbilities: AbilityDescription[] = [
    {initials: 'Perc.', name: 'Perception'},
  ];

  private levelingLadder: LevelingLadder = {
    1: 0,
    2: 300,
    3: 900,
    4: 2700,
    5: 6500,
    6: 14000,
    7: 23000,
    8: 34000,
    9: 48000,
    10: 64000,
    11: 85000,
    12: 100000,
    13: 120000,
    14: 140000,
    15: 165000,
    16: 195000,
    17: 225000,
    18: 265000,
    19: 305000,
    20: 355000,
  };

  private classList: IClass[] | undefined;
  private raceList: IRace[] | undefined;

  constructor(classList?: IClass[], raceList?: IRace[]) {
    if (this._instance) {
      return this._instance;
    }
    this.classList = classList;
    this.raceList = raceList;

    this._instance = this;
  }

  setClassList(classList: IClass[]) {
    this.classList = classList;
  }

  setRaceList(raceList: IRace[]) {
    this.raceList = raceList;
  }

  getPrimaryAbilitiesList(): string[] {
    return this.primaryAbilities.map(pa => pa.name);
  }

  getSecondaryAbilitiesList(): string[] {
    return this.secondaryAbilities.map(sa => sa.name);
  }

  getClassList(): IClass[] {
    return this.classList || [];
  }

  getRaceList(): IRace[] {
    return this.raceList || [];
  }

  getLevelExperienceLadder(): LevelingLadder {
    return this.levelingLadder;
  }

  getMaxLevel(): number {
    const levels: string[] = Object.keys(this.getLevelExperienceLadder());
    return parseInt(levels[levels.length - 1]);
  }

  checkExperienceToNextLevel(charExp: number, charLevel: number): number {
    if (charLevel === this.getMaxLevel()) {
      return Infinity;
    }
    return this.levelingLadder[charLevel + 1] - charExp;
  }
}
