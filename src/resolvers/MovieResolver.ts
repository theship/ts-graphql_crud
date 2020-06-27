import {
    Resolver,
    Mutation,
    Arg,
    Int,
    Query,
    InputType,
    Field
  } from "type-graphql";
  import { Movie } from "../entity/Movie";
  
  @InputType()
  class MovieInput {
    @Field()
    title: string;
  
    @Field(() => Int)
    minutes: number;
  }
  
  @InputType()
  class MovieUpdateInput {
    @Field(() => String, { nullable: true })
    title?: string;
  
    @Field(() => Int, { nullable: true })
    minutes?: number;
  }
  
  @Resolver()
  export class MovieResolver {
  
    // Create a mutation to update | change the database

    // return value for resolver
    @Mutation(() => Movie)
  
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

    // In playground, since we're returning a movie object, 
    // create movie has to provide the type string:
    // mutation{
    //     createMovie(
    //       options: {
    //         title: "barbara",
    //         minutes: 47
    //       }
    //     ) {
    //           id
    //           title
    //           minutes
    //     }
    // }

    // The resolver
    async createMovie(@Arg("options", () => MovieInput) options: MovieInput) {
        //const movie = await Movie.insert(options);
        //return JSON.parse(JSON.stringify(movie)) ;

        // The database logic
        const movie = await Movie.create(options).save();
        return movie;
    }

    @Mutation(() => Boolean)
    async updateMovie(
      @Arg("id", () => Int) id: number,
      @Arg("input", () => MovieUpdateInput) input: MovieUpdateInput
    ) {
        // database logic
      await Movie.update({ id }, input);
      return true;
    }
  
    @Mutation(() => Boolean)
    async deleteMovie(@Arg("id", () => Int) id: number) {
      await Movie.delete({ id });
      return true;
    }
  
    @Query(() => [Movie])
    movies() {
      return Movie.find();
    }
  }