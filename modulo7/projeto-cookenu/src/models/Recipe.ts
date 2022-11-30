export type Recipe = {
    id: string,
    title: string,
    description: string,
    deadline: string,
    author_id: string
}

export interface RecipeInputDTO {
    title: string,
    description: string,
    deadline: string
    
}