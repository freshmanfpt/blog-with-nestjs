import { Entity ,Column , PrimaryColumn ,PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne} from "typeorm";
import { Admin } from "./admin.entity";
import { Comment } from "./comment.enity";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;
    // @Column()
    // admin_id: number;
    @Column()
    title: string;
    @Column()
    date: Date;
    @Column()
    paragraph: string;
    @ManyToOne(type => Admin , admin => admin.blogs)
    admin:Admin;
    @OneToMany(type => Comment , comments => comments.blog)
    comments:Comment[];
}