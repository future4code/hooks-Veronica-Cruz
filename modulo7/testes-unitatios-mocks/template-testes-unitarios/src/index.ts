export interface Character {
    name: string,
    life: number,
    defense: number,
    strength: number,
}

export interface ValidateCharacterOutput{
    isValid: boolean,
    errors:Character[],
}

interface ValidateCharacterInput {
    key: string,
    value: string
}

export const validateCharacter = (input: any): ValidateCharacterOutput => {
    let errors: Character[]=[]

    for(const key in input){
        if(input[key] !== false && !input[key]){
            errors.push({key,value:input[key]
            })
        }
    }

    if (!input.name || input.life === undefined || input.strength === undefined ||
      input.defense === undefined) {
      return false;
    }
  
    if (input.life <=0 || input.strength <=0 || input.defense <=0) {
      return false;

    }else {
        return true;
    }
    // return isValida:errors.length === 0,
    // errors
  };