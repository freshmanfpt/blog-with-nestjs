import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Blog } from './blog.entity';
import { User } from './user.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  paragraph: string;
  @ManyToOne(type => Blog, blog => blog.comments,{
    cascade: true,
})
  blog: Blog;
  @ManyToOne(type => User, user => user.comments,{
    cascade: true,
})
  user: User;
}
