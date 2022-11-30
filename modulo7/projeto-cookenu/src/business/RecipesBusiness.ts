import { RecipeDatabase } from "../data/RecipesDatabase";
import { Recipe, RecipeInputDTO } from "../models/Recipe";
import { RecipeNotCreated, CustomError } from "../error/CustomError"
import { IdGenerator } from "../services/IdGenerator";


export class RecipeBusiness {
    public createRecipe = async (input: RecipeInputDTO) => {
        try {
            const { title, description, deadline } = input

            if (!title || !description || !deadline) {
                throw new RecipeNotCreated()
            }
            const idGenerator = new IdGenerator()
            const id = idGenerator.generateId()
            
        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }
}