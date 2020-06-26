import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number

    // typeorm will infer the type
    // based on the typescript type
    @Column()
    title: string

    // You can explicity specify the type, 
    // and even make it nullable 
    // @Column("int", {default: 60, nullable: true})
    @Column("int", {default: 60})
    minutes: number
}