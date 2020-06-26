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
* @Query movies 






