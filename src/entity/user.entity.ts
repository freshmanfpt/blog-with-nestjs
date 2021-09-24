import { Entity ,Column , PrimaryColumn ,PrimaryGeneratedColumn,OneToMany} from "typeorm";
import { Comment } from "./comment.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique:true})
    username: string;
    @Column()
    password: string;
    @OneToMany(type => Comment , comments => comments.user)
    comments:Comment[];
}