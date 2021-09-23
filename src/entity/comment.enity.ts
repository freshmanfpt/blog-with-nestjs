import { Entity ,Column , PrimaryColumn ,PrimaryGeneratedColumn,OneToMany, ManyToOne} from "typeorm";
import { Blog } from "./blog.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;
    // @Column()
    // user_id: number;
    // @Column()
    // blog_id: number;
    @Column()
    paragraph: string;
    @ManyToOne(type => Blog,blog => blog.comments)
    blog : Blog;
}