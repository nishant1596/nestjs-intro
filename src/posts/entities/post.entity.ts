import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  postType: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  slug: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  status: string;

  @Column({
    type: 'varchar',
    length: 96,
    unique: true,
    nullable: true,
  })
  content: string;

  @Column({
    type: 'varchar',
    length: 96,
    unique: true,
    nullable: true,
  })
  schema: string;

  @Column({
    type: 'varchar',
    length: 96,
    unique: true,
    nullable: true,
  })
  featuredImageUrl: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  publishedOn: Date;

  @Column({
    type: 'simple-array',
    nullable: true,
  })
  tags: string[];
}
