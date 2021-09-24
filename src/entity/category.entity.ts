import { Entity ,Column , PrimaryColumn ,PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Blog } from "./blog.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique:true})
    description: string;
    @OneToMany(type => Blog , blog => blog.category)
    blogs:Blog[];
}