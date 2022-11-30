import { Recipe } from "../models/Recipe"
import { BaseDatabase } from "./BaseDatabase"

export class RecipeDatabase extends BaseDatabase {
    
    private static TABLE_NAME = "Recipes_table"

    public createRecipe = async(recipe: Recipe) =>{
        await RecipeDatabase.connection()
            .insert({
                id: recipe.id,
                title: recipe.title,
                description: recipe.description,
                deadline: recipe.deadline,
                author_id: recipe.author_id
            }).into(RecipeDatabase.TABLE_NAME)
    }
}