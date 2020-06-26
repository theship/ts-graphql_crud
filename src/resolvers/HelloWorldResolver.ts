import { Query, Resolver } from "type-graphql";

// graphql schema being generated from the resolver
@Resolver()
export class HelloWorldResolver {
  @Query(() => String)
  hello() {
    return "hi!";
  }
}
