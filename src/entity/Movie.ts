import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Movie extends BaseEntity {

    // @Field gives us the GraphQL type and
    // @PrimaryGeneratedColumn or @Column give
    // the database types

    // Field return type is an array of movies
    // We could create an almost duplicate class, instead,
    // using typeorm and graphql, we can add the @Field
    // values to the current class, annotating it with the
    // @ decorator from type-graphql
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    // typeorm will infer the type
    // based on the typescript type
    @Field()
    @Column()
    title: string;

    // You can explicity specify the type, 
    // and even make it nullable 
    // @Column("int", {default: 60, nullable: true})
    @Field(() => Int)
    @Column("int", { default: 60 })
    minutes: number;
}