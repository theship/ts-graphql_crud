Starting with Typescript GraphQl starter from @BenAwad
-------------------------

https://github.com/benawad/gatsby-typescript-app-starter

>>npx create-graphql-api ts_graphql_crud_benawad
>>cd ts_graphql_crud_benawad

>>yarn start

Go to http://localhost:4000/graphql

[Typescript GraphQL CRUD Tutorial](https://www.youtube.com/watch?v=WhzIjYQmWvs)

CRUD operations
------------------------

1. Create a table in the Movie.ts file

* Add a Movie.ts file in the entity folder
* In the Movie.ts file, create new movie table in your database with a new typeorm entity, and set the columns and primary generated column.

2. Create a new movie in the MovieResolver.ts file

* Add a MovieResolver.ts in the resolvers folder
* In the MovieResolver.ts file, update/change your database with a mutation decorator from type-grpahql.
* Make it an export class and import it in the Index.ts file.
* createMovie @Arg sets the table fields
* @Query movies to find all movies
* typeorm entity fields are here: https://github.com/typeorm/typeorm/blob/2c90e1c05f9c1dfc66bc47510e44d953ae31566a/docs/entities.md
* add ObjectType() and @Fields() to the entity, so that the same class provides the @fields for GraphQL and the Columns for the database
* Set the return type of the resolver in MovieResolver

Playground queries

Create & Read together
mutation{
  createMovie(
    options: {
      title: "barbara",
      minutes: 47
    }
  ) {
    	id
    	title
    	minutes
  }
}
Read
{
  movies{
  	id
    title
    minutes
	}
}

Update

mutation {
  updateMovie(id: 4
    input: {
      title: "barb"
    }
  )
}

Delete

mutation{
  deleteMovie(id:5)
}


