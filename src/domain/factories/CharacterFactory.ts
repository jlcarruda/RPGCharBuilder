import IRace from '../interfaces/IRace';
import IClass from '../interfaces/IClass';
import ISystem from '../interfaces/ISystem';
import ICharacter from '../interfaces/ICharacter';

export default class CharacterFactory {
  create(
    name: string,
    charClass: IClass,
    race: IRace,
    system: ISystem,
  ): ICharacter {
    return system.createCharacter(name, charClass, race);
  }
}
