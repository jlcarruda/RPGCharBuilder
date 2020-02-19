import IClass from './interfaces/IClass';
import IClassAbility from './interfaces/IClassAbility';

export default class Class implements IClass {
  private name: string;
  private classAbilities: IClassAbility[];

  constructor(name: string, classAbilities: IClassAbility[]) {
    this.name = name;
    this.classAbilities = classAbilities;
  }

  getName(): string {
    return this.name;
  }

  getClassAbilitiesList(): IClassAbility[] {
    return this.classAbilities;
  }

  getClassAbilitiesUntilLevel(level: number): IClassAbility[] {
    return this.classAbilities.filter(a => a.level <= level);
  }
}
