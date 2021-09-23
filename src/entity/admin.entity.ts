import { Entity ,Column , PrimaryColumn ,PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Blog } from "./blog.entity";

@Entity()
export class Admin {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    password: string;
    @Column()
    permission: number;
    @OneToMany(type => Blog ,blog => blog.admin)
    blogs : Blog[];

}