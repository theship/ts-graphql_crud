import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// a user table that maps to columns
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
