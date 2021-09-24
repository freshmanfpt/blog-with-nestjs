import { Entity ,Column , PrimaryColumn ,PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne} from "typeorm";
import { Admin } from "./admin.entity";
import { Category } from "./category.entity";
import { Comment } from "./comment.entity";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    date: Date;
    @Column()
    paragraph: string;
    @ManyToOne(type => Admin , admin => admin.blogs,{
        cascade: true,
    })
    admin:Admin;
    @ManyToOne(type => Category , category => category.blogs,{
        cascade: true,
    })
    category:Category;
    @OneToMany(type => Comment , comments => comments.blog)
    comments:Comment[];
}