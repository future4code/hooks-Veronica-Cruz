import { MovieDatabase } from "../data/Movie Database";
import { v4 as generateId } from "uuid";

export class MovieBusiness {
    async createMovieBusiness({title, description,
    duration_in_minutes, year_of_release}:any): Promise<void> {
    if(!title || !description || !duration_in_minutes || !year_of_release){
        throw new Error ('Está faltando alguma informação!')
    }
    const id = generateId()

    const movieDatabase = new MovieDatabase()
    await movieDatabase.createMovieDatabase({
        id, 
        title, 
        description,
        duration_in_minutes, 
        year_of_release
    })
    }

}