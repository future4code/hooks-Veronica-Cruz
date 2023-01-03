//dados do personagem
export interface Character {
    name: string,
    life: number,
    defense: number,
    strength: number,
}

//verificações para validar dados do personagem
export const validateCharacter = (input: any)=> {

    if (!input.name || input.life === undefined || input.strength === undefined ||
      input.defense === undefined) {
      return false;
    }
  
    if (input.life <=0 || input.strength <=0 || input.defense <=0) {
      return false;

    }else {
        return true;
    }
   
  };

  //verificações para interagir ataque e defesa de personagens
//   export const performAttack = (attacker: Character, defender: Character) => {
//     if (!validateCharacter(attacker) || !validateCharacter(defender)) {
//       throw new Error("Invalid character");
//     }
  
//     if (attacker.strength > defender.defense) {
//       defender.life -= attacker.strength - defender.defense;
//     }
//   };

//inversão de dependências da função anterior
export const performAttack = (attacker: Character,defender: Character,
    validator: (input: Character) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  };