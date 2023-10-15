import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Deal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  tiket: number;

  @Column()
  yield: number;

  @Column()
  days: number;

  @Column()
  sold: number;

  @Column()
  image: string;
}
