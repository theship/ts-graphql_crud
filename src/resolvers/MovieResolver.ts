import { Resolver, Mutation, Arg, Int, Query } from "type-graphql";
import { Movie } from "../entity/Movie";

@Resolver()
export class MovieResolver{

    // Create a mutation to update | change the database
    // Return t/f worked
    @Mutation(() => Boolean)

    // type-graphql decorator
    // explicitly create a variable, title, and
    // set the typescript type, String.
    // The annotation: @Arg('title', () => String)
    // is for type-graphql and the graphql schema
    // where 'title' is the argument and String is the type
    // The two "title"s, here, don't have to be the same
    // Also, type-graphql can actually infer the String type
    // Sometimes type-graphql can't infer the String, so
    // it needs to be explicit, as in:
    // @Arg('title', () => String, {nullable: true}) title: string | null
    async createMovie(
        @Arg('title', () => String) title: string,
        // could be an int or a float, so need to specify
        @Arg('minutes', () => Int) minutes: number
    ){
        await Movie.insert({title, minutes});
        console.log(title);
        return true;
    }

    @Query()
    movies(){
        return Movie.find();
    }
}