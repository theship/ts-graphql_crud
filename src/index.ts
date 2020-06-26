import "reflect-metadata";
import { createConnection, getConnectionOptions } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloWorldResolver } from "./resolvers/HelloWorldResolver";
import { MovieResolver } from "./resolvers/MovieResolver";

// async await function wrapped in parenthesis, calling itself
(async () => {

  // express instance
  const app = express();

  const options = await getConnectionOptions(
    process.env.NODE_ENV || "development"
  );

  // connection from typeorm
  await createConnection({ ...options, name: "default" });

  // Apollo database server instance
  const apolloServer = new ApolloServer({

    // graphql schema with type-graphql
    schema: await buildSchema({

      resolvers: [HelloWorldResolver, MovieResolver],
      validate: true
    }),
    // graphql context
    context: ({ req, res }) => ({ req, res })
  });

  // setting up Apollo server getting it to connect with our express instance
  apolloServer.applyMiddleware({ app, cors: false });
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
  });
})();
